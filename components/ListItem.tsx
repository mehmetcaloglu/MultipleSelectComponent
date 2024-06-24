import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Character } from '../app.d';

interface ListItemProps
{
    item: Character;
    query: string;
    handleSelectCharacter: ( character: Character ) => void;
}


const ListItem: React.FC<ListItemProps> = ( { item, query, handleSelectCharacter } ) =>
{
    const highlightText = ( text: string, highlight: string ) =>
    {
        const parts = text.split( new RegExp( `(${ highlight })`, 'gi' ) );
        return (
            <Text>
                { parts.map( ( part, index ) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <Text key={ index } style={ { fontWeight: 'bold' } }>
                            { part }
                        </Text>
                    ) : (
                        part
                    )
                ) }
            </Text>
        );
    };
    return (
        <TouchableOpacity className="flex-row p-2 border-b border-gray-300" onPress={ () => handleSelectCharacter( item ) }>
            <Image source={ { uri: item.image } } className="w-12 h-12 mr-3" />
            <View className="flex-1 justify-center">
                <Text className="text-lg">{ highlightText( item.name, query ) }</Text>
                <Text className="text-gray-500">Episodes: { item.episode.length }</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;
