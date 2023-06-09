import React from 'react'
import { ArticleWeek } from './ArticleWeek'
import { ContainerArticles, ContainerPrimary } from './styles'
import { Comments } from './Comments'
import { Loading } from '../Loading'
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
        {!article && <Loading />}
        <ContainerPrimary>
                <h2>Artigo da Semana</h2>
                {article && article[0] !== undefined && 
                    <ArticleWeek 
                        article={article[0]}
                    />
                }
                <div>
                    <h3>Comentários</h3>
                    <div className='container-comments'>
                        {comments?.map((comment, index) => {
                            if (index < 6) {
                                return (
                                    <li key={comment?.id}>
                                        <Comments 
                                            author={comment?.name}
                                            date={new Intl.DateTimeFormat('pt-BR').format(new Date(comment['created_at']))}
                                            title={comment?.title}
                                            text={comment?.text}
                                        />
                                    </li>
                                )
                            }
                            return null
                        })}
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
                            id={art.id}
                            key={art.id}
                        /> 
                    )
                )}
                 
            </div>
            
        </ContainerArticles>
    </>

  )
}
