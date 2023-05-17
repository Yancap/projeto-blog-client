import React from 'react'
import { Container, Content, Settings } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Delete } from '../../../assets/delete.svg'
import { ReactComponent as Edit } from '../../../assets/edit.svg'

export const Comments = () => {
  return (
    <Container>
      <Content>
        <h3>
          Titulo do Comentário Lorem Ipsum dolor sit ammet
        </h3>
        <span>
          <Clock />
          03/04/2023 - Titulo do Artigo Lorem Ipsum dolor sit...
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum, 
          arcu ut bibendum lobortis, orci velit sagittis magna, nec dapibus nibh purus id ante...
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
