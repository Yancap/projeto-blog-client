import React from 'react'
import { Container, Content, Search } from './styles'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Git} from '../../assets/network/git.svg'
import { ReactComponent as Linkedin} from '../../assets/network/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/network/instagram.svg'
import { ReactComponent as Account } from '../../assets/header/account.svg'
import { ReactComponent as SearchIcon } from '../../assets/header/search.svg'

export const Header = () => {
  return (
    
    <Container>
        <Content>
          <div>
            <Logo />
          </div>

          <Search>
            <div>
              <Git />
              <Linkedin />
              <Instagram />
            </div>
            <form action="">
              <input type="text" />
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
            <div>
              <Account />
              <a>LOGIN</a>
            </div>
          </Search>
        </Content>
    </Container>
    
    

  )
}
