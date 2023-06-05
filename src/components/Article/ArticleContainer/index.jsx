import React from 'react'
import { Container, Content, LabelLogo, Text } from './styles'
import { ReactComponent as Clock } from '../../../assets/article/clock.svg'
import { ReactComponent as Logo } from '../../../assets/logo-light.svg'

export const ArticleContainer = ({article}) => {
  const regex = /\\n/g //regex que verifica a flag '\n'
  const text = article.text?.split(regex) //retira a flag do texto

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
                <p>
                    {text?.map(t => 
                    <>
                        {/* 
                            Vai pular linha sempre que tiver 
                            uma separação no array por conta da remoção da flag
                         */}
                        {t}
                        <br />
                    </>
                    )}
                </p>
            </Text>
        </Content>
    </Container>
  )
}
