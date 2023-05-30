import React from 'react'
import {  getUserArticles, getUserComments } from '../../request'
import { LoginContext } from '../../context/LoginContext'
import { Route, Routes } from 'react-router-dom'
import { Main } from './Main'
import { EditArticle } from './EditArticle'

export const Profile = ({user}) => {
  const [ articles, setArticles ] = React.useState(null)
  const [ comments, setComments ] = React.useState(null)
  const { reload } = React.useContext(LoginContext)

  async function getData(){
    const token = localStorage.getItem('token')
    const [art, comm] = await Promise.all([getUserArticles(token), getUserComments(token)])
    setArticles(art)
    setComments(comm)
  }
  
  React.useEffect(()=> {getData()}, [reload])
  return (
      <Routes>
        <Route path="edit-article/:id" element={<EditArticle articles={articles && articles}/>}/>
        <Route path="/" element={<Main user={user} comments={comments} articles={articles}/>} />
      </Routes>
  )
}
