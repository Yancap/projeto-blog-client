import React from 'react'
import { Container, Content, Datas, Form, Submit, Title } from '../styles'
import { Link, useNavigate } from 'react-router-dom'
import { loginRequest } from '../../../request'
import { LoginContext } from '../../../context/LoginContext'

export const Login = () => {
  const [login, setLogin] = React.useState({
    email: '', password: ''
  })
  const {setIsLogged, setUser} = React.useContext(LoginContext)
  const navigate = useNavigate()
  const [ loading, setLoading ] = React.useState()
  async function handleSubmit(event){
    event.preventDefault()
    setLoading(true)
    const response = await loginRequest(login)
    if (response.token && response.name && response.hierarchy) {
        localStorage.setItem('token', response.token)
        setUser({
            name: response.name,
            hierarchy: response.hierarchy,
            avatar: response.avatar
        })
        setIsLogged(true)
        setLoading(false)
        navigate('/')
    }
    
  }
  return (
      <>
        <Container>
            <Content>
                <Title>LOGIN</Title>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={({currentTarget}) => setLogin({
                            ...login, ['email']: currentTarget.value
                        })}/>
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" onChange={({currentTarget}) => setLogin({
                            ...login, ['password']: currentTarget.value
                        })}/>
                    </div>
                    <Link to={'/register'}>Não tem cadastro?</Link>
                    <Submit className={loading && "loading"}>
                        {loading ? "Enviando" : "Entrar"}
                    </Submit>
                </Form>
            </Content>
            <Datas>
                <i>Contas para teste</i>
                <div>
                    <h3>ADM</h3>
                    <p>
                        Email: yan@email.com
                    </p>
                    <p>
                        Senha: 123
                    </p>
                </div>
                <div>
                    <h3>Leitor</h3>
                    <p>
                        Email: jonhdoe@email.com
                    </p>
                    <p>
                        Senha: 123
                    </p>
                </div>
            </Datas>
        </Container>
        
      </>

  )
}
