import React from 'react'
import { ContainerPrimary, ContainerSecondary } from './styles'
import { ArticleContainer } from './ArticleContainer'
import { Author } from './Author'
import { getAllCommentsForArticles, getArticles } from '../../request'
import { CommentsContainer } from './CommentsContainer'
import { useParams } from 'react-router-dom'

export const Article = () => {
  const [article, setArticle] = React.useState(null)
  const [comment, setComment] = React.useState(null)
  const params = useParams()
  async function getData(){
    const [articles, comments] = await Promise.all([getArticles(Number(params.id)), getAllCommentsForArticles(Number(params.id))])
    setArticle(articles)
    setComment(comments)
  }
  React.useEffect(() => {getData()}, [])
  if (article) {
    return (
      <>
          <ContainerPrimary>
              <ArticleContainer article={article}/>
              <Author id={article['user_id']}/>
          </ContainerPrimary>
          <ContainerSecondary>
            <CommentsContainer comments={comment}/>
          </ContainerSecondary>
      </>
    )
  }
  return null
}
