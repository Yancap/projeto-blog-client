import React from 'react'
import { Container, Content, Form, Submit, Title } from '../styles'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <Container>
        <Content>
            <Title>CADASTRAR</Title>
            <Form>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                <Link to={'/login'}>Já tem cadastro?</Link>
                <Submit>Enviar</Submit>
            </Form>
        </Content>
    </Container>
  )
}
