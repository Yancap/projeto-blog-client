import React from 'react'
import { Buttons, Container, Content } from './styles'
import { ReactComponent as Images } from '../../../assets/images.svg'
import { ArticleContainer } from '../../Article/ArticleContainer'
import { updateArticles } from '../../../request'
import { useNavigate, useParams } from 'react-router-dom'
import { LoginContext } from '../../../context/LoginContext'

export const EditArticle = ({articles}) => {
  const {id} = useParams()
  const [articleEdit] = articles?.filter(article => {
      return article?.id === Number(id) 
  })
  const [article, setArticle] = React.useState({})
  const [vizualization, setVizualization] = React.useState(false)
  const { setReload, reload } = React.useContext(LoginContext)
  const navigate = useNavigate()
  
  async function handleSubmit(event){
     event.preventDefault()
     const token = localStorage.getItem('token')
     const response = await updateArticles(article, token)
     alert(response)
     setReload(!reload)
     navigate('/profile')
  }

  React.useEffect(() => {
    setArticle(articleEdit)
  }, [articleEdit])

  return (
    <Container>
        <Content onSubmit={handleSubmit}>
            <div className='title'>
                <label htmlFor=""></label>
                <textarea type="text" placeholder='Titulo do Artigo' rows='2' value={article?.title}
                    onChange={({currentTarget})=>{setArticle({...article, title: currentTarget.value})}}
                />
            </div>
            <div className='subtitle'>
                <textarea type="text" placeholder='Subtitulo do Artigo' rows='3' value={article?.subtitle}
                    onChange={({currentTarget})=>setArticle({...article, subtitle: currentTarget.value})}
                />
            </div>
            <div className='text'>
                <textarea type="text" placeholder='Texto do Artigo' rows='10' value={article?.text}
                    onChange={({currentTarget})=>{
                        const regex = /\\n/g
                        //Converte primeiro para string, pois apenas assim a flag \n aparece
                        //Logo em seguida, uso o regex para adiciona a flag \n formatada
                        //Depois normalizo essa string e adiciono na variavel
                        const txt = JSON.parse(JSON.stringify(currentTarget.value).replace(regex, '\\\\n'))
                        setArticle({...article, text: txt}) 
                    }}
                />
            </div>
            <label htmlFor="image" className={article?.image ? 'image' : 'image not'}>
                {article?.image ? 
                <img src={article.image} alt="" />
                : 
                <Images />
                }
                <p>Adicionar Imagem</p>
                <input type="file" id='image' 
                  onChange={(event)=>{
                    let reader = new FileReader();
                    reader.onload = () => {
                        setArticle({...article, image: reader.result})
                    }
                    reader.readAsDataURL(event.target.files[0]);
                    }}
                />
            </label>
            <Buttons>
                <button type='submit'>Publicar</button>
                <button onClick={() =>{ 
                    setVizualization(!vizualization)
                }}>{!vizualization ? "Pre-vizualição" : "Mostrar menos"}</button>
            </Buttons>
        </Content>
        {vizualization && <ArticleContainer article={article}/>}
    </Container>
  )
}
