import React from 'react'
import { AddAvatar, Container, ContentDeeds, ContentProfile } from './styles'
import { Article } from './Article'
import { Comments } from './Comments'
import { ReactComponent as Settings } from '../../assets/settings.svg'
import {  changeAvatar, getUserArticles, getUserComments } from '../../request'
import { LoginContext } from '../../context/LoginContext'

export const Profile = ({user}) => {
  const [ settings, setSettings ] = React.useState(false)
  const [ articles, setArticles ] = React.useState(null)
  const [ comments, setComments ] = React.useState(null)
  const [ avatar, setAvatar ] = React.useState(null)

  const {setReload, reload} = React.useContext(LoginContext)

  async function getData(){
    const token = localStorage.getItem('token')
    const [art, comm] = await Promise.all([getUserArticles(token), getUserComments(token)])
    setArticles(art)
    setComments(comm)
  }
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
    const resp = await changeAvatar(avatar, token)
    setAvatar(null)
    setReload(!reload)
  }
  React.useEffect(()=> {getData()}, [])
  return (
    <Container>
      <ContentProfile>
        <div className='avatar'>
            <img src={avatar || user.avatar} alt="Avatar" />
            
            <AddAvatar onSubmit={handleSubmit}>
              {!avatar && user.avatar ? 
              <>
                <label htmlFor="avatar">{!user.avatar ? 'Adicionar ' : 'Trocar de '}Avatar</label>
                <input type="file" id="avatar" onChange={handleChange}/>
              </> : 
              <>
                <button type='submit'>
                  Enviar
                </button>
              </>}
            </AddAvatar>
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
          {articles && articles.map(article => (
            <Article set={settings} article={article}  key={article.id}/>
          ))}
          
        </div>
      </ContentDeeds>
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
  )
}
