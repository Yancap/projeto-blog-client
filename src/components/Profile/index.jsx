import React from 'react'
import { Container, ContentDeeds, ContentProfile } from './styles'
import { Article } from './Article'
import { Comments } from './Comments'
import {ReactComponent as Settings} from '../../assets/settings.svg'

export const Profile = ({user}) => {
  const [ settings, setSettings ] = React.useState(false)
  
  return (
    <Container>
      <ContentProfile>
        <div className='avatar'>
            <img src={user.avatar} alt="Avatar" />
            {!user.avatar && <button>Adicionar Avatar</button>}
        </div>
        <div className='user'>
          <h1>{user.name}</h1>
          <span>
            {
              user.hierarchy === 'reader' ? "Leitor" : 
              user.hierarchy === 'publisher' ? "Editor" : "Admin"
            }
          </span>
          {
            user.hierarchy === 'reader' ? null : <button>Criar Artigo</button>
          }
          
        </div>
      </ContentProfile>

      <ContentDeeds>
        <div className='header'>
          <h2>Seus Artigos</h2>
          <Settings className={settings && 'active'} onClick={()=>setSettings(!settings)}/>
        </div>
        <div className='content'>
          <Article set={settings}/>
          <Article set={settings}/>
        </div>
      </ContentDeeds>
      <ContentDeeds>
        <div className='header'>
          <h2>Seus Comentários</h2>
        </div>
        <div className='content'>
          <Comments />
          <Comments />
        </div>
      </ContentDeeds>
    </Container>
  )
}
