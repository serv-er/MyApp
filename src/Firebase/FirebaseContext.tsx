


import React, { createContext, FC, PropsWithChildren, useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

type FirebaseContextType = {
    firebase: typeof auth;
    user: FirebaseAuthTypes.User | null;
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
};

export const FirebaseContext = createContext<FirebaseContextType>({
    firebase: auth,
    user: null,
    isLoggedIn: false,
    setIsLoggedIn: () => {},
});

export const FirebaseProvider: FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setIsLoggedIn(!!currentUser);
        });

        return () => unsubscribe();
    }, []);

    const defaultValue = {
        firebase: auth,
        user,
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <FirebaseContext.Provider value={defaultValue}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;
