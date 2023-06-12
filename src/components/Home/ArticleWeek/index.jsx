import React from 'react'
import { Article, Content, Image } from './styles'
import { ReactComponent as Comments } from '../../../assets/article/comments.svg'
import { ReactComponent as Access } from '../../../assets/article/access.svg'
import { Link } from 'react-router-dom'

export const ArticleWeek = ({article}) => {
  return (
    <Article data-id={article?.id} className={!article && 'loading'}>
        <Image>
            <img src={article?.image} alt="" />
        </Image>
        <Content>
            <div className='date'>
                <span>{article && new Intl.DateTimeFormat('pt-BR').format(new Date(article['created_at']))}</span>
            </div>
            <div className='content'>
                <h4>{article?.title}</h4>
                <p>{article?.subtitle}</p>
            </div>
            <div className='info'>
                <span>Por: <strong>{article?.author}</strong></span>
            </div>
            <div className='link'>
                <Link to={'article/' + article?.id}>
                    <i>Acessar</i>
                    <Access />
                </Link>
            </div>
        </Content>
    </Article>
  )
}
