import React from 'react'
import { Container, Content } from './styles'

export const Main = ({children}) => {
  return (
    <Container>
        <Content>
            {children}
        </Content>
    </Container>
  )
}
