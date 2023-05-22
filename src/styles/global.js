import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-body: #FFF;
        --background-primary:#9D9BF2;
        --background-secondary:#E0DFFB;
        --background-tertiary:#D0CEF9;
        --background-btn-search: #B1AFF6;
        --background-article: #EFEFFD;
        --color-purple-dark: #070739;
        --color-span:#585788;
        --color-text: #383838;
        --color-subtitle: #575757;
        --black: #1C0013;
        --white: #fff;
        --color-border:#4745B8;
        --red: #FF7070;
        --yellow: #EBE081;

        --font-text: 'Roboto', Helvetica, sans-serif;
        --font-title: 'Tinos', serif;
        --font-functional: 'Roboto Condensed', Helvetica, sans-serif ;
        --margin-top-image: -2rem;
    }
    #root{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        /* Configuração IMPORTANTE!! */
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 600px) {
          font-size: 87.5%;  
        }
    }
    body{
        -webkit-font-smoothing:antialiased;
        
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6{
        font-weight: 600;
        font-family: var(--font-title);
    }
    p, span{
        font-family: var(--font-text);
    }
    a{
        font-family: var(--font-functional);
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`