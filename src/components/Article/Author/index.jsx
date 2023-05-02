import React from 'react'
import { Articles, Container, Info, Label } from './styles'
import { getAuthor } from '../../../request'
import {ReactComponent as Profile} from '../../../assets/article/profile.svg'

export const Author = ({id}) => {
  const [author, setAuthor] = React.useState(null)
  React.useEffect(() => {
    const author = getAuthor(id)
    author.then(author => setAuthor(author))
  },[])
  return (
    <Container>
        <Label>
          <Profile />
          <div className="line"></div>
          <h3>Conheça o Autor</h3>
        </Label>
        <Info>

        </Info>
        <Articles>
          
        </Articles>
    </Container>
  )
}
