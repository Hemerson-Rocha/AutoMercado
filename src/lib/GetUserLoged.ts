import { useEffect, useState } from 'react'
import { api } from './axios';

// type Props = {}

const GetUserLoged = () => {
    const [auth, setAuth] = useState()

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