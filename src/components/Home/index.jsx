import React from 'react'
import { ArticleWeek } from './ArticleWeek'
import { ContainerArticles, ContainerPrimary } from './styles'
import { Comments } from './Comments'
import { Card } from './Card'
import { getAllComments, getArticlesforHome, getCommentsforArticles } from './Request/requests'

export const Home = () => {
  const [article, setArticle] = React.useState(null)
  const [articleComments, setArticleComments] = React.useState(null)
  const [comments, setComments] = React.useState(null)
  React.useEffect(()=>{
    const articles = getArticlesforHome()
    const articlesComments = getCommentsforArticles(1)
    const allComments = getAllComments()
    articles.then(data => setArticle(data.articles))
    articlesComments.then(data => setArticleComments(data.comments))
    allComments.then(data => setComments(data.comments))
  }, [])
  console.log(article);
  console.log(comments);
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
                        commentsLength={comments ? comments.reduce((total, comment) => comment['article_id'] === article[0].id ? total + 1 : 0, 0) : 0}
                        id={article[0].id}
                    />
                }
                <div>
                    <h3>Comentários</h3>
                    <div className='container-comments'>
                        {articleComments?.map(comment => (
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
                            commentsLength={comments ? comments.reduce((total, comment) => comment['article_id'] === art.id ? total + 1 : 0, 0) : 0}
                            id={art.id}
                        /> 
                    )
                )}
               
                <Card 
                     image='https://s1.static.brasilescola.uol.com.br/be/2022/06/livro-aberto-artigo.jpg'
                     title='Titulo do Artigo'
                     content='Sub Titulo do Artigo para exemplo ou um pedaço do texto do artigo para exemplificar, lorem ipsum dolor sit amet'
                     author='Yan Gabriel'
                     date='22/11/2023'
                     commentsLength='12'
                 /> 
                 
            </div>
            
        </ContainerArticles>
    </>

  )
}
