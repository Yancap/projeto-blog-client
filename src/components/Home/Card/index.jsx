import React from 'react'
import { Container, Content, Image } from './styles'
import { ReactComponent as Comments } from '../../../assets/article/comments.svg'
import { ReactComponent as Access } from '../../../assets/article/access.svg'
import { Link } from 'react-router-dom'

export const Card = ({image, title, content, author, date, id}) => {
  return (
    <Container data-id={id} >
        <Link to={'article/' + id}>
            <Image>
                <img src={image} alt={title} />
            </Image>
            <Content>
                <div className='date'>
                    <span>{date}</span>
                </div>
                <div className='content'>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <span>Por <strong>{author}</strong></span>
                </div>
            </Content>    
        </Link>
    </Container>
  )
}
