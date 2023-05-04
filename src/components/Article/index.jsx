import React from 'react'
import { ContainerPrimary, ContainerSecondary } from './styles'
import { ArticleContainer } from './ArticleContainer'
import { Author } from './Author'
import { getArticles } from '../../request'
import { CommentsContainer } from './CommentsContainer'
import { useParams } from 'react-router-dom'

export const Article = () => {
  const [article, setArticle] = React.useState(null)
  const params = useParams()
  const art = getArticles(Number(params.id))
  art.then(data =>{
    setArticle(data)
  })
  if (article) {
    return (
      <>
          <ContainerPrimary>
              <ArticleContainer article={article}/>
              <Author id={article['user_id']}/>
          </ContainerPrimary>
          <ContainerSecondary>
            <CommentsContainer id={article.id}/>
          </ContainerSecondary>
      </>
    )
  }
  return null
}
