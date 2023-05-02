import React from 'react'
import { ContainerPrimary, ContainerSecondary } from './styles'
import { ArticleContainer } from './ArticleContainer'
import { Author } from './Author'
import { getArticles } from '../../request'
import { CommentsContainer } from './CommentsContainer'

export const Article = ({id, user_id}) => {
  const [article, setArticle] = React.useState({})
  React.useEffect(()=>{
    const art = getArticles(id)
    art.then(data => setArticle(data))
  }, [])
  return (
    <>
        <ContainerPrimary>
            <ArticleContainer article={article}/>
            <Author id={article['user_id']}/>
        </ContainerPrimary>
        <ContainerSecondary>
          <CommentsContainer />
        </ContainerSecondary>
    </>
  )
}
