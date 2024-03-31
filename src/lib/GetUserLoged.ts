import { useEffect, useState } from 'react'
import { api } from './axios';
import { UserType } from '../models/interfaces/ResultUserApi';

// type Props = {}

const GetUserLoged = () => {
    const [auth, setAuth] = useState<UserType>()

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

  return ( auth )
}

export default GetUserLoged