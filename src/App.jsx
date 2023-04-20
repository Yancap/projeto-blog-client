import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
    
  );
}

export default App;
