import React from 'react'
import { Container, Content, Settings } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Delete } from '../../../assets/delete.svg'
import { deleteComments, getArticles } from '../../../request'
import { LoginContext } from '../../../context/LoginContext'
import { useNavigate } from 'react-router-dom'

export const Comments = ({comment}) => {
  const [article, setArticle] = React.useState(null)
  const {setReload, reload} = React.useContext(LoginContext)
  const navigate = useNavigate()

  async function handleDelete(){
    const token = localStorage.getItem('token');
    await deleteComments({article_id: comment.article_id, comments_id: comment.id}, token)
    setReload(!reload)
  }

  React.useEffect(()=>{
    const article = getArticles(comment.article_id)
    article.then(art => setArticle(art))
  }, [])
  return (
    <Container>
      <Content>
        <h3>
          {comment.title}
        </h3>
        <span onClick={() => navigate('/article/' + article?.id)}>
          <Clock />
          {new Intl.DateTimeFormat('pt-BR').format(new Date(comment['created_at']))} - 
          {article?.title}
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
