import React from 'react'
import { Container, Content, Settings } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Delete } from '../../../assets/delete.svg'
import { deleteComments, getArticles } from '../../../request'
import { LoginContext } from '../../../context/LoginContext'

export const Comments = ({comment}) => {
  const [title, setTitle] = React.useState(null)
  const {setReload, reload} = React.useContext(LoginContext)

  async function handleDelete(){
    const token = localStorage.getItem('token');
    await deleteComments({article_id: comment.article_id, comments_id: comment.id}, token)
    setReload(!reload)
  }

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
        <button className='delete' onClick={handleDelete}>
          <Delete />
        </button>
      </Settings>
    </Container>
  )
}
