import React from 'react'
import { Container, ContentDeeds, ContentProfile } from './styles'
import { Article } from './Article'
import { Comments } from './Comments'

export const Profile = ({user}) => {
  return (
    <Container>
      <ContentProfile>
        <div className='avatar'>
            <img src="" alt="" />
            <button>Adicionar Avatar</button>
        </div>
        <div className='user'>
          <h1>Yan Gabriel Ferreira</h1>
          <span>Editor</span>
          <button>Criar Artigo</button>
        </div>
      </ContentProfile>

      <ContentDeeds>
        <div className='header'>
          <h2>Seus Artigos</h2>
          <i>O</i>
        </div>
        <div className='content'>
          <Article />
          <Article />
        </div>
      </ContentDeeds>
      <ContentDeeds>
        <div className='header'>
          <h2>Seus Comentários</h2>
          <i>O</i>
        </div>
        <div className='content'>
          <Comments />
          <Comments />
        </div>
      </ContentDeeds>
    </Container>
  )
}
