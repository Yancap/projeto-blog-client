import React from "react";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import { LoginContext} from "./context/LoginContext";
import { GlobalStyle } from "./styles/global";
import {  Route, Routes } from 'react-router-dom'
import { CreateArticle } from "./components/CreateArticle";

function App() {
  const {user} = React.useContext(LoginContext)
  return (
      <>
            <GlobalStyle />
            
            <Header />
            <Main >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="/profile/create-article" element={<CreateArticle  user={user}/>} />
              </Routes>
            </Main>
            <Footer />
      </>
            
    
  );
}

export default App;
