import React from 'react'
import { ArticleWeek } from './ArticleWeek'
import { ContainerPrimary } from './styles'
import { Comments } from './Comments'

export const Home = () => {
  return (
    <>
        <ContainerPrimary>
                <h2>Artigo da Semana</h2>
                <ArticleWeek 
                    image='https://s1.static.brasilescola.uol.com.br/be/2022/06/livro-aberto-artigo.jpg'
                    title='Titulo do Artigo'
                    content='Sub Titulo do Artigo para exemplo ou um pedaço do texto do artigo para exemplificar, lorem ipsum dolor sit amet'
                    author='Yan Gabriel'
                    date='22/11/2023'
                    commentsLength='12'
                />
                <div>
                    <h3>Comentários</h3>
                    <div className='container-comments'>
                        <li>
                            <Comments 
                                author='Nome do Camarada'
                                date='03/04/2023'
                                title='Titulo do Comentário'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum sem mi, 
                                ut ullamcorper ligula malesuada auctor. Etiam lobortis libero vitae felis consequat, 
                                vel pharetra metus pharetra.'
                            />
                        </li>
                        <li>
                            <Comments 
                                author='Nome do Camarada'
                                date='03/04/2023'
                                title='Titulo do Comentário'
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum sem mi, 
                                ut ullamcorper ligula malesuada auctor. Etiam lobortis libero vitae felis consequat, 
                                vel pharetra metus pharetra.'
                            />
                        </li>
                    </div>
                </div>
        </ContainerPrimary>
        <section>

        </section>
    </>

  )
}
