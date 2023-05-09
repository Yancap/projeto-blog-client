import React from "react";
import { useNavigate } from "react-router-dom";

export const SearchContext = React.createContext()

export const SearchStorage = ({children}) =>{
    const [search, setSearch] = React.useState('')
    const [result, setResult] = React.useState([])
    const nav = useNavigate()
    const navigate = (path) =>{
        setSearch('')
        nav(path)
    }
    return (
        <SearchContext.Provider value={{search, setSearch, result, setResult, navigate}}>
            {children}
        </SearchContext.Provider>
    )
}