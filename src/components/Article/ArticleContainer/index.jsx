import React from 'react'
import { Container, Content, LabelLogo, Text } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Logo } from '../../../assets/logo-light.svg'

export const ArticleContainer = ({article}) => {
  const text = article.text?.split(' ')
  console.log(text);

  text.map( t => console.log('\\n' === JSON.stringify(t)))
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
                {article['created_at'] && 
                    <span>
                        <Clock />
                        <strong>
                            {new Intl.DateTimeFormat('pt-BR').format(new Date(article['created_at']))}
                        </strong>
                        - {article.author}
                    </span>
                }
                {/* FAZER UM REGEX PARA LOCALIZAR A FLAG '\n' */}
                <p>
                    {text?.map(t => JSON.stringify(t) === '"\\n"' ? <><br /><br /></> : t + ' ')}
                </p>
            </Text>
        </Content>
    </Container>
  )
}
