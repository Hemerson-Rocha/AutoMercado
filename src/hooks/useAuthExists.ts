import { useEffect, useState } from "react";
import { GetUsers } from "../lib/getUsers";
import { UserType } from "../models/interfaces/ResultUserApi";

// interface useAuthExistsProps {
//     email: string
//     password: string
// }

export const useAuthExists = (email:string, password: string) => {
    const { getedUsers } = GetUsers()
    const [users, setUsers] = useState<UserType[]>()

    useEffect(() => {
        setUsers(getedUsers)
    }, [getedUsers]);

    let usersFind

    users ? ( 
        usersFind = users.find((user)=> user.email === email && user.password === password) 
    ) : (
        usersFind = undefined
    )

    return usersFind
}