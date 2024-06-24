import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRickAndMortyAPI } from '../hooks/useApi';
import SearchInput from '../components/SearchInput';
import CharacterList from '../components/CharacterList';
import { Character } from '../app.d';
import { useStore } from '../store/useStore';
import "../global.css";

const MultiSelectAutocomplete: React.FC = () =>
{
    const [ query, setQuery ] = useState( '' );
    const { data, isLoading, error } = useRickAndMortyAPI( query );
    const { selectedCharacters, addCharacter, removeCharacter } = useStore();

    const handleSelectCharacter = ( character: Character ) =>
    {
        if ( selectedCharacters.find( ( c ) => c.id === character.id ) ) {
            removeCharacter( character.id );
        } else {
            addCharacter( character );
        }
    };


    return (
        <View className='mt-4 mx-2'>
            <SearchInput query={ query } setQuery={ setQuery } selectedCharacters={ selectedCharacters } handleSelectCharacter={ handleSelectCharacter } />
            <CharacterList data={ data?.results } query={ query } isLoading={ isLoading } error={ error } handleSelectCharacter={ handleSelectCharacter } />
        </View>
    );
};



export default MultiSelectAutocomplete;
