import React from 'react'
import { Container, Content, Image, ModalDelete, Settings } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Delete } from '../../../assets/delete.svg'
import { ReactComponent as Edit } from '../../../assets/edit.svg'
import { deleteArticles } from '../../../request'
import { LoginContext } from '../../../context/LoginContext'
import { Link, useNavigate } from 'react-router-dom'

export const Article = ({article, set}) => {
  const [modal, setModal] = React.useState(false)
  const {setReload, reload} = React.useContext(LoginContext)
  const navigate = useNavigate()
  function handleModalDelete(){
    setModal(!modal)
  }
  async function handleDelete(){
    const token = localStorage.getItem('token')
    
    await deleteArticles(article.id, token)
    setReload(!reload)
  }
  return (
    <>
      <Container onClick={() => navigate('/article/' + article.id)}>
        <Image>
          <img src={article.image} alt="" />
        </Image>
        <Content>
          <h3>
            {article.title}
          </h3>
          <span>
            <Clock />
            {new Intl.DateTimeFormat('pt-BR').format(new Date(article['created_at']))}
          </span>
          <p>
            {article.text}
          </p>
        </Content>
        <Settings className={set && 'active'}>
          <button className='delete' onClick={handleModalDelete}>
            <Delete />
          </button>
          <button className='edit'>
            <Link to={"edit-article/" + article.id}>
              <Edit />
            </Link>
          </button>
          
        </Settings>
        {modal && 
          <ModalDelete>
            <div>
              <strong>Confirmar a Exclusão do Artigo?</strong>
              <i>OBS: Essa operação não tem volta</i>
              <div className='buttons'>
                <button onClick={handleDelete}>
                  Sim
                </button>
                <button onClick={handleModalDelete}>
                  Não
                </button>
              </div>
            </div>
          </ModalDelete>
        }
      </Container>
      
    </>
  )
}
