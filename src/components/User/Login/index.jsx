import React from 'react'
import { Container, Content, Form, Submit, Title } from '../styles'
import { Link } from 'react-router-dom'

export const Login = () => {
    // Fazer as requisições de login
  return (
    <Container>
        <Content>
            <Title>LOGIN</Title>
            <Form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                <Link to={'/register'}>Não tem cadastro?</Link>
                <Submit>Entrar</Submit>
            </Form>
        </Content>
    </Container>
  )
}
