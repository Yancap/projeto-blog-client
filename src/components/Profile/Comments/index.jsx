import React from 'react'
import { Container, Content, Settings } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Delete } from '../../../assets/delete.svg'
import { ReactComponent as Edit } from '../../../assets/edit.svg'
import { getArticles } from '../../../request'

export const Comments = ({comment}) => {
  const [title, setTitle] = React.useState(null)
  React.useEffect(()=>{
    const article = getArticles(comment.article_id)
    article.then(art => setTitle(art.title))
  },[])
  return (
    <Container>
      <Content>
        <h3>
          {comment.title}
        </h3>
        <span>
          <Clock />
          {new Intl.DateTimeFormat('pt-BR').format(new Date(comment['created_at']))} - 
          {title}
        </span>
        <p>
          {comment.text}
        </p>
      </Content>
      <Settings>
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
