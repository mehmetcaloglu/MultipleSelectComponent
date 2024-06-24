import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Character } from '../app.d';

interface SelectedCharacterProps
{
    character: Character;
    handleSelectCharacter: ( character: Character ) => void;
}

const SelectedCharacter: React.FC<SelectedCharacterProps> = ( { character, handleSelectCharacter } ) =>
{
    return (
        <View className="flex-row items-center bg-gray-300 p-2 mr-2 rounded-md">
            <Text className="text-base mr-2">{ character.name }</Text>
            <TouchableOpacity onPress={ () => handleSelectCharacter( character ) }>
                <Text className="text-red-500">✕</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SelectedCharacter;
