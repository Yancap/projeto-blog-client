import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Main } from "./components/Main";
import { ArticleStorage } from "./context/ArticleContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
      <ArticleStorage>
        <GlobalStyle />
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </Main>

        <Footer />
      </ArticleStorage>
    </BrowserRouter>
    
  );
}

export default App;
