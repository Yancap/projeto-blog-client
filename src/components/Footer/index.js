import React from 'react'
import {Container, Content, Credit, Social} from './styles.js'
import {ReactComponent as Git} from '../../assets/network/git.svg'
import {ReactComponent as Linkedin} from '../../assets/network/linkedin.svg'

export const Footer = () => {
    return (
        <Container>
            <Content>
                <Social>
                    <a href="https://github.com/Yancap" target='_blank'>
                        <Git />
                    </a>
                    <a href="https://www.linkedin.com/in/yangabriel/" target='_blank'>
                        <Linkedin />
                    </a>
                </Social>
                <Credit>
                    <p>Projeto feito por Yan Gabriel Ferreira</p>
                </Credit>
            </Content>
        </Container>
    ) 
}
