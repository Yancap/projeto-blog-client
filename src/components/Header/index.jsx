import React from 'react'
import { Container, Content, Search } from './styles'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Git} from '../../assets/network/git.svg'
import { ReactComponent as Linkedin} from '../../assets/network/linkedin.svg'
import { ReactComponent as Account } from '../../assets/header/account.svg'
import { ReactComponent as SearchIcon } from '../../assets/header/search.svg'
import {  useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { searchArticleByContent } from '../../request'

export const Header = () => {
  const {setSearch, search, setResult, navigate: nav} = React.useContext(SearchContext)
  const navigate = useNavigate()
  async function handleSubmit(event){
    event.preventDefault()
    const {article} = await searchArticleByContent(search)
    setResult(article)
    navigate('/search')
  }
  function handleChange({currentTarget}){
    setSearch(currentTarget.value)
  }
  return (
    <Container>
        <Content>
          <div onClick={() => nav('/')}>
            <Logo />
          </div>

          
            <div className='social'>
              <Git />
              <Linkedin />
            </div>
            <form action="" onSubmit={handleSubmit} className='search'>
              <input type="text" onChange={handleChange} value={search}/>
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
            {/* <div onClick={() => navigate('/login')}>
              <Account />
              <a>LOGIN</a>
            </div> */}
        </Content>
    </Container>
    
    

  )
}
