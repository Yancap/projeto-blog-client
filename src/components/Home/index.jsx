import React from 'react'
import { ArticleWeek } from './ArticleWeek'
import { ContainerArticles, ContainerPrimary } from './styles'
import { Comments } from './Comments'
import { Card } from './Card'
import {  getAllCommentsForArticles, getArticlesForHome } from '../../request'

export const Home = () => {
  const [article, setArticle] = React.useState(null)
  const [comments, setComments] = React.useState(null)
  React.useEffect(()=>{
    getArticlesForHome().then(data => setArticle(data))
    getAllCommentsForArticles(1).then(data => setComments(data))
  }, [])
  return (
    <>
        <ContainerPrimary>
                <h2>Artigo da Semana</h2>
                {article && 
                    <ArticleWeek 
                        image={article[0].image}
                        title={article[0].title}
                        content={article[0].subtitle}
                        author={article[0].author}
                        date={new Intl.DateTimeFormat('pt-BR').format(new Date(article[0]['created_at']))}
                        //commentsLength={comments ? comments.reduce((total, comment) => comment['article_id'] === article[0].id ? total + 1 : 0, 0) : 0}
                        id={article[0].id}
                    />
                }
                <div>
                    <h3>Comentários</h3>
                    <div className='container-comments'>
                        {comments?.map(comment => (
                            <li key={comment.id}>
                                <Comments 
                                    author={comment.name}
                                    date={new Intl.DateTimeFormat('pt-BR').format(new Date(comment['created_at']))}
                                    title={comment.title}
                                    text={comment.text}
                                />
                            </li>
                        ))}
                    </div>
                </div>
        </ContainerPrimary>
        <ContainerArticles>
            <h2>Todos os Artigos</h2>
            <div>
                {article && article.map(
                    art => (
                        <Card 
                            image={art.image}
                            title={art.title}
                            content={art.subtitle}
                            author={art.author}
                            date={new Intl.DateTimeFormat('pt-BR').format(new Date(art['created_at']))}
                            //commentsLength={comments ? comments.reduce((total, comment) => comment['article_id'] === art.id ? total + 1 : 0, 0) : 0}
                            id={art.id}
                        /> 
                    )
                )}
                 
            </div>
            
        </ContainerArticles>
    </>

  )
}
