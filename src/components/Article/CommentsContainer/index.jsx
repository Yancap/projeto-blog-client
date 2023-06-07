import React, { useContext, useState } from 'react'
import { Container, Content, Form } from './styles'
import { ReactComponent as CommentIcon } from '../../../assets/article/comments.svg'
import { createComments, getAllCommentsForArticles } from '../../../request'
import { Comments } from '../Comments'
import { LoginContext } from '../../../context/LoginContext'
import { Response } from '../../Response'


export const CommentsContainer = ({comments, article_id}) => {
  const { user, reload, setReload } = useContext(LoginContext)

  const [comment, setComment] = useState({
    title: '',
    text: '',
    name: user.name,
    article_id: article_id
  })
  const [response, setResponse] = useState()
  async function handleSubmit(event){
    event.preventDefault()
    const token = localStorage.getItem('token')
    const response = await createComments(comment, token)
    setResponse(response)
    setComment({
        title: '',
        text: '',
        name: user.name,
        article_id: article_id
      })
    setReload(!reload)    
  }
  return (
    <Container>
        <Form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Comentar</label>
            <input type="text" placeholder='Título' value={comment.title}
                onChange={({currentTarget}) => setComment({...comment, ['title']: currentTarget.value})}
            />
            <textarea name="text" cols="30" rows="5" placeholder='Comentário' value={comment.text}
                onChange={({currentTarget}) => setComment({...comment, ['text']: currentTarget.value})} 
            />
            <Response response={response}/>
            <button type="submit">Enviar</button>
        </Form>
        <div className='comment-logo'>
            <CommentIcon />
            <h2>Comentários ({comments?.length})</h2>
        </div>
        <Content>
            {comments?.map(comment => (
                <li key={comment.id}>
                    <Comments 
                        author={comment.name}
                        date={new Intl.DateTimeFormat('pt-BR').format(new Date(comment['created_at']))}
                        title={comment.title}
                        text={comment.text}
                    />
                </li>
            ))}
        </Content>
    </Container>
  )
}
