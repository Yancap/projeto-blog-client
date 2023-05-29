import React from 'react'
import { Container, Content, Image, Settings } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Delete } from '../../../assets/delete.svg'
import { ReactComponent as Edit } from '../../../assets/edit.svg'
import { deleteArticles } from '../../../request'

export const Article = ({article, set}) => {
  async function handleDelete(){
    const token = localStorage.getItem('token')
    await deleteArticles(article.id, token)
  }
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
        <button className='delete' onClick={handleDelete}>
          <Delete />
        </button>
        <button className='edit'>
          <Edit />
        </button>
      </Settings>
    </Container>
  )
}
