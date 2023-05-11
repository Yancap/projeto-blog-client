import React from 'react'
import { Articles, Container, Info, Label } from './styles'
import { getAuthor, getAuthorArticles } from '../../../request'
import {ReactComponent as Profile} from '../../../assets/article/profile.svg'
import { useNavigate } from 'react-router-dom'

export const Author = ({id}) => {
  const [author, setAuthor] = React.useState(null)
  const [articles, setArticles] = React.useState(null)
  const navigate = useNavigate()
  React.useEffect(() => {
    if (id && !author) {
      const author = getAuthor(id)
      author.then(author => 
        setAuthor(author)
      )
    } 
    if (author) {
      const artAuthor = getAuthorArticles(author.id)
      artAuthor.then(articles => setArticles([articles[0], articles[1]]))
    } 
  },[id, author])
  return (
    <Container>
        <Label>
          <Profile />
          <div className="line"></div>
          <h3>Conheça o Autor</h3>
        </Label>
        <Info>
          <div>
            <img src={author?.avatar} alt="avatar"  />
          </div>
          <h3>{author?.name}</h3>
        </Info>
        <Articles>
          {articles?.map(art => (
            <div onClick={() => navigate('/article/' + art.id)}>
              <h4>{art.title}</h4>
              <p>{art.subtitle}</p>
            </div>
          ))}
        </Articles>
    </Container>
  )
}
