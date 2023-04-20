import React from 'react'
import { ArticleWeek } from './ArticleWeek'
import { ContainerPrimary } from './styles'

export const Home = () => {
  return (
    <>
        <ContainerPrimary>
            <section>
                <h2>Artigo da Semana</h2>
                <ArticleWeek 
                    image='https://s1.static.brasilescola.uol.com.br/be/2022/06/livro-aberto-artigo.jpg'
                    title='Titulo do Artigo'
                    content='Sub Titulo do Artigo para exemplo ou um pedaço do texto do artigo para exemplificar, lorem ipsum dolor sit amet'
                    author='Yan Gabriel'
                    date='22/11/2023'
                    commentsLength='12'
                />
            </section>
            <section>
                <h3>Comentários</h3>
                <div>

                </div>
            </section>
        </ContainerPrimary>
        <section>

        </section>
    </>

  )
}
