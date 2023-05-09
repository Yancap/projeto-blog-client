import React from "react";

export const SearchContext = React.createContext()

export const SearchStorage = ({children}) =>{
    const [search, setSearch] = React.useState('')
    const [result, setResult] = React.useState([])
    return (
        <SearchContext.Provider value={{search, setSearch, result, setResult}}>
            {children}
        </SearchContext.Provider>
    )
}