import React from 'react'
import { Container, ContentResult, ContentSearch } from './styles'
import { ReactComponent as SearchIcon } from '../../assets/header/search.svg'
import { ReactComponent as Arrow } from '../../assets/search/arrow.svg'
import { ArticleResult } from './ArticleResult'
import { SearchContext } from '../../context/SearchContext'
import { searchArticleByContent } from '../../request'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
  const {setSearch, search, result, setResult} = React.useContext(SearchContext)
  const [aux, setAux] = React.useState('')
  const navigate = useNavigate()
  async function handleSubmit(event){
    event.preventDefault()
    const article = await searchArticleByContent(search)
    setAux(search)
    setResult(article)
  }
  function handleChange({currentTarget}){
    setSearch(currentTarget.value)
  }
  React.useEffect(() =>{
    setAux(search)
  }, [])
  return (
    <Container> 
        <ContentSearch>
            <div className='result'>
                <span>
                    <strong>{aux}</strong>  - Resultado da Pesquisa
                </span>
            </div>
            <div className='search'>
                <div onClick={() => {
                    navigate('/')
                    setSearch('')
                    setResult([])
                    }}>
                    <Arrow />
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={search} onChange={handleChange}/>
                    <button type="submit">
                        <SearchIcon />
                    </button>
                </form>
            </div>
        </ContentSearch>
        <ContentResult>
            {result[0] ? 
                result.map( art =>{
                    return <ArticleResult key={art.id} article={art} />
                }) : 
                <span>
                    Sem Resultados
                </span>}
        </ContentResult>
    </Container>
  )
}
