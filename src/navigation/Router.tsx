import 'react-native-gesture-handler';
import { View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { FirebaseContext } from '../Firebase/FirebaseContext';
import Loading from '../components/Loading';

import AppNavigator from './AppNavigator';
import AuthStack from './AuthStack';

export const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { user, setIsLoggedIn } = useContext(FirebaseContext);

    useEffect(() => {
        // Firebase already provides the user in context via onAuthStateChanged,
        // so we just handle loading state here
        if (user !== undefined) {
            setIsLoading(false);
            setIsLoggedIn(!!user);
        }
    }, [user, setIsLoggedIn]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <NavigationContainer>
            {user ? <AppNavigator /> : <AuthStack />}
        </NavigationContainer>
    );
};
