import { useEffect, useState } from "react";
import { api } from "./axios";
import { UserType } from "../models/interfaces/ResultUserApi"

export const GetUsers = () => {
    const [getedUsers, setGetedUsers] = useState<UserType[]>()

    useEffect(() => {
        api.get('/users')
        .then((response) => {
            setGetedUsers(response.data)
        })
        .catch((err) => {
            console.log(`Error in get by API. ${err}`);
        })
    }, []);

    return { getedUsers }
}  