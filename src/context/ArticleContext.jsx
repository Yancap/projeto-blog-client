import React from "react";

export const ArticleContext = React.createContext()

export const ArticleStorage = ({children}) =>{
    const [articleId, setArticleId] = React.useState()
    return (
        <ArticleContext.Provider value={{articleId, setArticleId}}>
            {children}
        </ArticleContext.Provider>
    )
}