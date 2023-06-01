import React from 'react'
import { Container, Content } from './styles'
import { ReactComponent as CommentIcon } from '../../../assets/article/comments.svg'
import { getAllCommentsForArticles } from '../../../request'
import { Comments } from '../Comments'


export const CommentsContainer = ({comments}) => {
  
  return (
    <Container>
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
