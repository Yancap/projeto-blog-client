import React from 'react'
import { Article, Content, Image } from './styles'
import { ReactComponent as Comments } from '../../../assets/article/comments.svg'
import { ReactComponent as Access } from '../../../assets/article/access.svg'
import { Link } from 'react-router-dom'

export const ArticleWeek = ({image, title, content, author, date, commentsLength, id}) => {
  return (
    <Article data-id={id}>
        <Image>
            <img src={image} alt="article image" />
        </Image>
        <Content>
            <div className='date'>
                <span>{date}</span>
            </div>
            <div className='content'>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
            <div className='info'>
                <span>Por: <strong>{author}</strong></span>
                <div>
                    <Comments />
                    <span>{commentsLength}</span>
                </div>
            </div>
            <div className='link'>
                <Link to={'article/' + id}>
                    <i>Acessar</i>
                    <Access />
                </Link>
            </div>
        </Content>
    </Article>
  )
}
