import React from 'react'
import { AddAvatar, Container, ContentDeeds, ContentProfile } from './styles'
import { Article } from '../Article'
import { Comments } from '../Comments'
import { ReactComponent as Settings } from '../../../assets/settings.svg'
import {  changeAvatar } from '../../../request'
import { LoginContext } from '../../../context/LoginContext'
import { useNavigate } from 'react-router-dom'

export const Main = ({ articles, comments}) => {
  const [ settings, setSettings ] = React.useState(false)
  const [ avatar, setAvatar ] = React.useState(null)
  const {setReload, reload, user} = React.useContext(LoginContext)
  const navigate = useNavigate();

  
  function handleChange(event){
    let reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  async function handleSubmit(event){
    event.preventDefault()
    const token = localStorage.getItem('token')
    await changeAvatar(avatar, token)
    setAvatar(null)
  }
  function handleLogout(){
    localStorage.removeItem('token')
    setReload(!reload)
    navigate('/')
  }
  return (
    <>
      <Container>
        <ContentProfile>
          <div className='avatar'>
              <img src={avatar || user.avatar} alt="Avatar" />
              <AddAvatar onSubmit={handleSubmit}>
                <>
                  <label htmlFor="avatar">{!user.avatar ? 'Adicionar ' : 'Trocar de '}Avatar</label>
                  <input type="file" id="avatar" onChange={handleChange}/>
                  <button type='submit'>
                    Enviar
                  </button>
                </> 
              </AddAvatar>
          </div>
          <div className='user'>
            <h1 >
              {user.name}
              <button onClick={handleLogout}>
                Sair
              </button>
            </h1>
            <span>
              {
                user.hierarchy === 'reader' ? "Leitor" : 
                user.hierarchy === 'publisher' ? "Editor" : "Admin"
              }
            </span>
            {
              user.hierarchy === 'reader' ? null : <button onClick={() => navigate('/profile/create-article')}>Criar Artigo</button>
            }
          </div>
          
          
        </ContentProfile>
        {user.hierarchy !== 'reader' ? 
        <ContentDeeds>
          <div className='header'>
            <h2>Seus Artigos</h2>
            <Settings className={settings && 'active'} onClick={()=>setSettings(!settings)}/>
          </div>
          <div className='content'>
            {articles && articles.map(article => (
              <Article set={settings} article={article}  key={article.id}/>
            ))}
          </div>
        </ContentDeeds>
        : null}

        <ContentDeeds>
          <div className='header'>
            <h2>Seus Comentários</h2>
          </div>
          <div className='content'>
            {comments && comments.map(comment => (
                <Comments comment={comment} key={comment.id}/>
            ))}
          </div>
        </ContentDeeds>
      </Container>
    </>
  )
}
