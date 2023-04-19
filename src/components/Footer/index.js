import React from 'react'
import {Container, Content, Credit, Social} from './styles.js'
import {ReactComponent as Git} from '../../assets/network/git.svg'
import {ReactComponent as Linkedin} from '../../assets/network/linkedin.svg'
import {ReactComponent as Instagram} from '../../assets/network/instagram.svg'

export const Footer = () => {
    return (
        <Container>
            <Content>
                <Social>
                    <Git />
                    <Linkedin />
                    <Instagram />
                </Social>
                <Credit>
                    <p>Projeto feito por Yan Gabriel Ferreira</p>
                </Credit>
            </Content>
        </Container>
    ) 
}
