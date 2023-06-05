import React from 'react'
import { Container, Content, Form, Submit, Title } from '../styles'
import { Link, useNavigate } from 'react-router-dom'
import { registerRequest } from '../../../request'

export const Register = () => {
  const [ register, setRegister ] = React.useState({
    name: '', email: '', password: ''
  })
  const [ response, setResponse ] = React.useState()
  const navigate = useNavigate()
  async function handleSubmit(event) {
    event.preventDefault()
    const resp = await registerRequest(register)
    setResponse(resp)
    if (resp.message === 'OK') {
        navigate('/login')
    }
  }
  return (
    <Container>
        <Content>
            <Title>CADASTRAR</Title>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id="name" onChange={({currentTarget}) => setRegister({
                        ...register, ['name']: currentTarget.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={({currentTarget}) => setRegister({
                        ...register, ['email']: currentTarget.value
                    })}/>
                    {response?.status === 'error' && <span>{response.message}</span>}
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" onChange={({currentTarget}) => setRegister({
                        ...register, ['password']: currentTarget.value
                    })}/>
                </div>
                <Link to={'/login'}>Já tem cadastro?</Link>
                <Submit>Enviar</Submit>
            </Form>
        </Content>
    </Container>
  )
}
