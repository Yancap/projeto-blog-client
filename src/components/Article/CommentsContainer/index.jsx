import React from 'react'
import { Container, Content } from './styles'
import { ReactComponent as CommentIcon } from '../../../assets/article/comments.svg'
import { getCommentsforArticles } from '../../../request'
import { Comments } from '../Comments'


export const CommentsContainer = ({id}) => {
  const [articleComments, setArticleComments] = React.useState(null)
  React.useEffect(() => {
    const comments = getCommentsforArticles(id)
    console.log(comments);
    comments.then(data => setArticleComments(data.comments))
  },[id])
  return (
    <Container>
        <div className='comment-logo'>
            <CommentIcon />
            <h2>Comentários ({articleComments?.length})</h2>
        </div>
        <Content>
            {articleComments?.map(comment => (
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