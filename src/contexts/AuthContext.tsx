import { createContext, useEffect, useState } from "react";
import { UserType } from "../models/interfaces/ResultUserApi";
import { api } from "../lib/axios";
import GetUserLoged from "../lib/GetUserLoged";


export type AuthContextType = {
    auth: UserType | null;
    setAuth: Dispatch<SetStateAction<UserType>> | null;
    // signin: (email: string, password: string) => Promise<boolean>;
    // singout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);


export const AuthContextProvider = ({children} : { children: JSX.Element }) => {
    const [auth, setAuth] = useState<UserType | null>(null)

    
    useEffect(() => {
        (async () => {
            const storageData = localStorage.getItem('auth')

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