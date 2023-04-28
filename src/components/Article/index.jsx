import React from 'react'
import { ContainerPrimary } from './styles'
import { ArticleContainer } from './ArticleContainer'
import { Author } from './Author'
import { getArticles } from '../../request'

export const Article = ({id}) => {
  const [article, setArticle] = React.useState({})
  React.useEffect(()=>{
    const art = getArticles(id)
    art.then(data => setArticle(data))
    
  }, [])
  console.log(article);
  return (
    <>
        <ContainerPrimary>
            <ArticleContainer article={article}/>
            <Author />
        </ContainerPrimary>
    </>
  )
}
