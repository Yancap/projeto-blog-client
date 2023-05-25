import React from "react";
import { authTokenRequest } from "../request";
import { useNavigate } from "react-router-dom";

export const LoginContext = React.createContext()

export const LoginStorage = ({children}) =>{
    const [isLogged, setIsLogged] = React.useState(false)
    const [user, setUser] = React.useState({
        name: '', hierarchy: '', avatar: null
    })
    const [reload, setReload] = React.useState(false)

    const navigate = useNavigate()
    async function authRequest(token){
        const response = await authTokenRequest(token)
        if (response.redirect) {
            setIsLogged(false)
            navigate('/login')
        } else {
            setIsLogged(true)
            setUser({
                name: response.name,
                hierarchy: response.hierarchy,
                avatar: response.avatar
            })
        }
    }
    React.useEffect(()=>{
        const token = localStorage.getItem('token')
        if (!token) {
            return setIsLogged(false)
        }
        authRequest(token)
    }, [reload])
    return (
        <LoginContext.Provider value={{isLogged, setIsLogged, user, setUser, reload, setReload}}>
            {children}
        </LoginContext.Provider>
    )
}