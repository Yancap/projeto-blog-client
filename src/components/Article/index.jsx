import React from 'react'
import { ContainerPrimary, ContainerSecondary } from './styles'
import { ArticleContainer } from './ArticleContainer'
import { Author } from './Author'
import { getAllCommentsForArticles, getArticles } from '../../request'
import { CommentsContainer } from './CommentsContainer'
import { useParams } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'

export const Article = () => {
  const [article, setArticle] = React.useState(null)
  const [comments, setComments] = React.useState(null)
  const { reload } = React.useContext(LoginContext)

  const params = useParams()
  // console.log(art);
  // art.then(data => {
  //   setArticle(data)
  // })


  React.useEffect(() => {
    getArticles(Number(params.id)).then((articles) => setArticle(articles))
    getAllCommentsForArticles(Number(params.id)).then((comments) => setComments(comments))
  }, [reload])
  if (article) {
    return (
      <>
          <ContainerPrimary>
              <ArticleContainer article={article}/>
              <Author id={article['user_id']}/>
          </ContainerPrimary>
          <ContainerSecondary>
            <CommentsContainer comments={comments} article_id={params.id}/>
          </ContainerSecondary>
      </>
    )
  }
  return null
}
