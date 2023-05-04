import React from 'react'
import { Container, Content, LabelLogo, Text } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Logo } from '../../../assets/logo-light.svg'

export const ArticleContainer = ({article}) => {
  
  const text = article.text?.split(' ')
  return (
    <Container>
        <LabelLogo>
            <Logo />
        </LabelLogo>
        <Content>
            <h1>
                {article.title}
            </h1>
            <h3>
                {article.subtitle}
            </h3>
            <Text>
                <div className="image">
                    <img src={article.image} alt="" />
                </div>
                <span>
                    <Clock />
                    <strong>
                        {new Intl.DateTimeFormat('pt-BR').format(new Date(article['created_at']))}
                    </strong>
                     - {article.author}
                </span>
                <p>
                    {text?.map(t => t == '/n' ? <><br /><br /></> : t + ' ')}
                </p>
            </Text>
        </Content>
    </Container>
  )
}
