import { View, Text } from 'react-native'
import React, { createContext, FC, PropsWithChildren, useState } from 'react'

import AppwriteService from "./service"


type AppWriteContextType={
    appwrite:AppwriteService;
    isLoggedIn:boolean;
    setIsLoggedIn:(isLoggedIn: boolean) => void

}

export const AppwriteContext =createContext<AppWriteContextType>({
    appwrite: new AppwriteService(),
    isLoggedIn:false,
    setIsLoggedIn:()=>{}
})

export const AppWriteProvider:FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const defaultValue={
        appwrite: new AppwriteService(),
        isLoggedIn:false,
        setIsLoggedIn,
    }
    return (
        <AppwriteContext.Provider value={defaultValue}>
            {children}
        </AppwriteContext.Provider>
    )
}

export default AppWriteProvider