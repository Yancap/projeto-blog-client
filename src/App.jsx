import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Main } from "./components/Main";
import { Search } from "./components/Search";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import { ArticleStorage } from "./context/ArticleContext";
import { LoginStorage } from "./context/LoginContext";
import { SearchStorage } from "./context/SearchContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <LoginStorage>
        <ArticleStorage>
          <SearchStorage>
            <GlobalStyle />
            <Header />
            <Main >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Main>
            <Footer />
          </SearchStorage>
        </ArticleStorage>
      </LoginStorage>
    </BrowserRouter>
    
  );
}

export default App;
