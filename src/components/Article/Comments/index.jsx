import React from 'react'
import { Container, Info, Text, Title } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'

export const Comments = ({author, date, title, text}) => {
  return (
    <Container>
        <Info>
            <h5>{author}</h5>
            <div>
                <Clock />
                <span>
                    {date}
                </span>
            </div>
        </Info>
        <Title>{title}</Title>
        <Text>
            {text}
        </Text>
    </Container>
  )
}
