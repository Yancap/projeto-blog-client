import React from 'react'
import { Container, Content, Image, Settings } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Delete } from '../../../assets/delete.svg'
import { ReactComponent as Edit } from '../../../assets/edit.svg'

export const Article = ({article, set}) => {
  return (
    <Container>
      <Image>
        <img src={article.image} alt="" />
      </Image>
      <Content>
        <h3>
          {article.title}
        </h3>
        <span>
          <Clock />
          {new Intl.DateTimeFormat('pt-BR').format(new Date(article['created_at']))}
        </span>
        <p>
          {article.text}
        </p>
      </Content>
      <Settings className={set && 'active'}>
        <button className='delete'>
          <Delete />
        </button>
        <button className='edit'>
          <Edit />
        </button>
      </Settings>
    </Container>
  )
}
