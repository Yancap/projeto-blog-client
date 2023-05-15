import React from "react";
import { authTokenRequest } from "../request";
import { useNavigate } from "react-router-dom";

export const LoginContext = React.createContext()

export const LoginStorage = ({children}) =>{
    const [isLogged, setIsLogged] = React.useState(false)
    const [user, setUser] = React.useState({
        name: '', hierarchy: '',
    })
    const navigate = useNavigate()
    async function authRequest(token){
        const response = await authTokenRequest(token)
        if (response.status === 'error') {
            setIsLogged(false)
            navigate('/login')
        } else {
            setIsLogged(true)
            setUser({
                name: response.name,
                hierarchy: response.hierarchy
            })
        }
    }
    React.useEffect(()=>{
        const token = localStorage.getItem('token')
        if (!token) {
            return setIsLogged(false)
        }
        authRequest(token)
    }, [])
    return (
        <LoginContext.Provider value={{isLogged, setIsLogged, user, setUser}}>
            {children}
        </LoginContext.Provider>
    )
}