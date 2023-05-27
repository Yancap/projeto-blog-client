import React from 'react'
import { Buttons, Container, Content } from './styles'
import { ReactComponent as Images } from '../../assets/images.svg'
import { ArticleContainer } from '../Article/ArticleContainer'
import { createArticles } from '../../request'

export const CreateArticle = () => {
  const [article, setArticle] = React.useState({
      title: '',
      subtitle: '',
      text: '',
      image: '',
  })
  const [vizualization, setVizualization] = React.useState(false)

  async function handleSubmit(event){
      event.preventDefault()
      const token = localStorage.getItem('token')
    //   let a = JSON.stringify(article.text)
    //   article.text = a.replace('\\n', '\\\\n')
  }
  return (
    <Container>
        <Content onSubmit={handleSubmit}>
            <div className='title'>
                <label htmlFor=""></label>
                <textarea type="text" placeholder='Titulo do Artigo' rows='2'
                    onChange={({currentTarget})=>{setArticle({...article, title: currentTarget.value})}}
                />
            </div>
            <div className='subtitle'>
                <textarea type="text" placeholder='Subtitulo do Artigo' rows='3'
                    onChange={({currentTarget})=>setArticle({...article, subtitle: currentTarget.value})}
                />
            </div>
            <div className='text'>
                <textarea type="text" placeholder='Texto do Artigo' rows='10'
                    onChange={({currentTarget})=>setArticle({...article, text: currentTarget.value})}
                />
            </div>
            <label htmlFor="image" className={article.image ? 'image' : 'image not'}>
                {article.image ? 
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
                    if (vizualization) {
                        let a = JSON.stringify(article.text)
                        console.log(a);
                        setArticle({...article, text: JSON.parse(a)}) 
                    }
                    console.log(article);
                }}>{!vizualization ? "Pre-vizualição" : "Mostrar menos"}</button>
            </Buttons>
        </Content>
        {vizualization && <ArticleContainer article={article}/>}
    </Container>
  )
}
