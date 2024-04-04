import { createContext, useEffect, useState } from "react";
import { UserType } from "../models/interfaces/ResultUserApi";
import { api } from "../lib/axios";


export type AuthContextType = {
    auth: UserType | null;
    setAuth: React.Dispatch<React.SetStateAction<UserType | null>>
}

export const AuthContext = createContext<AuthContextType>(null!);


export const AuthContextProvider = ({children} : { children: JSX.Element }) => {
    const [auth, setAuth] = useState<UserType | null>(null)

    
    useEffect(() => {
        (async () => {
            const storageData = localStorage.getItem('auth')

            storageData && 
            api.get('/users/' + storageData)
            .then((response) => {
                setAuth(response.data)
            })
            .catch((err) => {
                console.log(`Error in get by API. ${err}`);
            })
        })()
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
}