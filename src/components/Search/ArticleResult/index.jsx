import React from 'react'
import { Container, Content, Image } from './styles.js'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { useNavigate } from 'react-router-dom'


export const ArticleResult = ({article}) => {
    const navigate = useNavigate()
  return (
    <Container key={article.id} onClick={()=> navigate('/article/' + article.id)}>
        <Image>
            <img src={article.image} alt="" />
        </Image>
        <Content>
            <h2>{article.title}</h2>
            <div className=''>
                <div>
                    <Clock />
                    <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(article['created_at']))} - {article.author}</span>
                </div>
            </div>
            <p> 
                {article.text}
            </p>
        </Content>
    </Container>
  )
}
