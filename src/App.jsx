import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Main } from "./components/Main";
import { Search } from "./components/Search";
import { ArticleStorage } from "./context/ArticleContext";
import { SearchStorage } from "./context/SearchContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ArticleStorage>
        <SearchStorage>
          <GlobalStyle />
          <Header />
          <Main >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/article/:id" element={<Article />} />
            </Routes>
          </Main>
          <Footer />
        </SearchStorage>
      </ArticleStorage>
    </BrowserRouter>
    
  );
}

export default App;
