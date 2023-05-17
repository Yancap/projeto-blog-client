import React from 'react'
import { Container, Content, Image, Settings } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Delete } from '../../../assets/delete.svg'
import { ReactComponent as Edit } from '../../../assets/edit.svg'

export const Article = ({article, set}) => {
  return (
    <Container>
      <Image>
        <img src="" alt="" />
      </Image>
      <Content>
        <h3>
          Titulo do Artigo Lorem Ipsum dolor sit ammet
        </h3>
        <span>
          <Clock />
          03/04/2023
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum, 
          arcu ut bibendum lobortis, orci velit sagittis magna, nec dapibus nibh purus id ante...
        </p>
      </Content>
      <Settings className={set && 'active'}>
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
