import React from 'react';
import { View, TextInput, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Character } from '../app.d';
import SelectedCharacter from './SelectedCharacters';

interface SearchInputProps
{
    query: string;
    setQuery: ( query: string ) => void;
    selectedCharacters: Character[];
    handleSelectCharacter: ( character: Character ) => void;
}

const SearchInput: React.FC<SearchInputProps> = ( { query, setQuery, selectedCharacters, handleSelectCharacter } ) =>
{
    return (
        <View className="flex-row items-center border border-gray-300 p-3 mb-2 rounded-md">
            <ScrollView horizontal contentContainerStyle={ { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' } }>
                { selectedCharacters.map( ( character, i ) => (
                    <SelectedCharacter
                        key={ i }
                        character={ character }
                        handleSelectCharacter={ handleSelectCharacter }
                    />
                ) ) }
                <TextInput
                    placeholder="Search for characters"
                    value={ query }
                    onChangeText={ setQuery }
                    className="flex-1 min-w-[100px] border-b border-gray-300"
                />
            </ScrollView>
        </View>
    );
};

export default SearchInput;
