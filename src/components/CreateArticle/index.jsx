import React from 'react'
import { Buttons, Container, Content } from './styles'
import { ReactComponent as Images } from '../../assets/images.svg'

export const CreateArticle = () => {
  return (
    <Container>
        <Content>
            <div className='title'>
                <label htmlFor=""></label>
                <textarea type="text" placeholder='Titulo do Artigo' rows='2'/>
            </div>
            <div className='subtitle'>
                <textarea type="text" placeholder='Subtitulo do Artigo' rows='3'/>
            </div>
            <div className='text'>
                <textarea type="text" placeholder='Texto do Artigo' rows='10'/>
            </div>
            <label htmlFor="image" className='image'>
                <Images />
                <p>Adicionar Imagem</p>
                <input type="file" id='image'/>
            </label>
        </Content>
        <Buttons>
            <button>Publicar</button>
            <button>Pre-vizualição</button>
        </Buttons>
    </Container>
  )
}
