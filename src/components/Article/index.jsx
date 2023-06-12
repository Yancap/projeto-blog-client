import React from 'react'
import { ContainerPrimary, ContainerSecondary } from './styles'
import { ArticleContainer } from './ArticleContainer'
import { Author } from './Author'
import { getAllCommentsForArticles, getArticles } from '../../request'
import { CommentsContainer } from './CommentsContainer'
import { useParams } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import { Loading } from '../Loading'

export const Article = () => {
  const [article, setArticle] = React.useState(null)
  const [comments, setComments] = React.useState(null)
  const { reload } = React.useContext(LoginContext)

  const params = useParams()

  React.useEffect(() => {
    getArticles(Number(params.id)).then((articles) => setArticle(articles))
    getAllCommentsForArticles(Number(params.id)).then((comments) => setComments(comments))
  }, [reload])
  
    return (
      <>
      {!article && <Loading />}
          <ContainerPrimary>
            {article && 
            <>
              <ArticleContainer article={article}/>
              <Author id={article && article['user_id']}/>
            </>
            }
          </ContainerPrimary>
          <ContainerSecondary>
            <CommentsContainer comments={comments} article_id={params.id}/>
          </ContainerSecondary>
      </>
    )
  
}
