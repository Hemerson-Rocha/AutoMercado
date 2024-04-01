import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const RequireAuth =  ({ children } : { children: JSX.Element }) => {
    const navigate = useNavigate()
    const storageData = localStorage.getItem('auth')
    useEffect(() => {
        (async () => {
            if (!storageData) {
                console.log('naotemcontexto');
                return navigate('/login')
            }
        })()   
    }, [navigate, storageData]);

    return children
}