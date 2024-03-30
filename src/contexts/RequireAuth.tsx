import { useContext, useEffect } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"

export const RequireAuth =  ({ children } : { children: JSX.Element }) => {
    const navigate = useNavigate()
    const { auth } = useContext(AuthContext)
    useEffect(() => {
        (async () => {
            if (!auth) {
                console.log('naotemcontexto');
                return navigate('/login')
            }
        })()   
    }, [auth, navigate]);

    return children
}