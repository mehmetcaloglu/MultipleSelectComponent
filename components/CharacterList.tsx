import React from 'react';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import { Character } from '../app.d';
import ListItem from './ListItem';

interface CharacterListProps
{
    data: Character[] | undefined;
    query: string;
    isLoading: boolean;
    error: any;
    handleSelectCharacter: ( character: Character ) => void;
}


const CharacterList: React.FC<CharacterListProps> = ( { data, query, isLoading, error, handleSelectCharacter } ) =>
{
    if ( isLoading ) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if ( error ) {
        return <Text className="text-red-600 text-lg text-center">Error loading characters</Text>;
    }

    return (
        <FlatList<Character>
            data={ data }
            keyExtractor={ ( item ) => item.id.toString() }
            renderItem={ ( { item } ) => (
                <ListItem item={ item } query={ query } handleSelectCharacter={ handleSelectCharacter } />
            ) }
        />
    );
};

export default CharacterList;
