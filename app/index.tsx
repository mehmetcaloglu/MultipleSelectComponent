import { View, Text } from 'react-native';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import MultiSelectAutocomplete from '@/components/MultiSelectAutoComplete';
import "../global.css";

const queryClient = new QueryClient();

const index = () =>
{
    return (
        <QueryClientProvider client={ queryClient }>
            < SafeAreaView  >
                <MultiSelectAutocomplete />
            </ SafeAreaView >
        </QueryClientProvider >

    );
};

export default index;