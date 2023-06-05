import styled from "styled-components";

export const ContainerPrimary = styled.section`
    display: grid;
    grid-template-areas:
    'title title title'
    'article article comments'
    'article article comments'
    ;
    gap: 28px;
    width: 100%;
    padding: 2rem 0 1rem 0;
    h2{
        font-family: var(--font-title);
        font-weight: 700;
        font-size: 2.75rem;
        color: var(--black);
        grid-area: title;
    }
    div:nth-child(2){
        grid-area: article;
    }
    div:nth-child(3){
        grid-area: comments;
        h3{
            display: inline-block;
            font-family: var(--font-title);
            font-weight: 700;
            font-size: 1.75rem;
            color: var(--black);
            margin-top: var(--margin-top-image);
            margin-bottom: 8px;
        }
        .container-comments{
            box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
            background-color: var(--background-article);
            padding: 6px;
            li{
                list-style: none;
            }
        }
    }
    @media screen and (max-width: 875px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        max-width: calc(100vw - 2rem);
        
    }
`

export const ContainerArticles = styled.section`
    padding: 1rem 0 3rem 0;
    margin-top: 5rem;
    h2{
        font-family: 'Tinos';
        font-weight: 700;
        font-size: 2.75rem;
        text-align: center;
        color:var(--black);
        margin-bottom: 2rem;
    }
    > div{
        max-width: calc(100vw - 2rem);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
        > div {
            width: 31%;
            min-width: 17rem;
            a{
              width: 100%;  
            }
            
        }
        @media screen and (max-width: 840px){
            justify-content: space-evenly;
        }
        @media screen and (max-width: 535px){
            justify-content: space-evenly;
        }
    }
`