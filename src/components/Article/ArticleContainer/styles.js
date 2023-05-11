import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 1.75rem 1.75rem 1.75rem;
    background: var(--background-article);
    border-top: 14px solid var(--color-border);
    @media screen and (max-width: 790px){
        padding: 0px .75rem .75rem 1.75rem;
    }
`

export const LabelLogo = styled.div`
    height: 4rem;
    width: 14rem;
    background-color: var(--color-border);
    border-radius: 0px 0px 7px 7px;
    margin-bottom: 1.75rem;
    display: grid;
    place-items: center;
    svg{
        width: 90%;
        height: auto;
        margin-bottom: 0.5rem;
    }
`

export const Content = styled.div`
    h1{
        font-size: 2.25rem;
        color: var(--black);
    }
    h3{
        font-style: italic;
        font-weight: 400;
        font-size: 1.5rem;

        color: #575757;
    }
    @media screen and (max-width: 450px){
        h1{
            font-size: 2rem;
        }
        h3{
            font-size: 1.25rem;
        }
    }
`

export const Text = styled.div`
    margin-top: 1rem;
    div.image{
        width: 21.225rem;
        height: 16.25rem;
        background-color: #ccc;
        float: left;
        margin-right: 1rem;
        margin-bottom: 1rem;
        display: grid;
        place-items: center;
        overflow: hidden;
        img{
            max-width: 100%;
            height: auto;
        }
        @media screen and (max-width: 790px){
            width: 19rem;
            height: 13.25rem;
        }
    }
    p{
        color: #383838;
    }
    span{
        display: flex;
        align-items: center;
        word-wrap: break-word;
        font-size: 1rem;
        font-family: var(--font-title);
        gap: 4px;
        color: #7C7ABF;
        margin-bottom: 1rem;
        path{
            fill: var(--color-border);
        }
    }
    @media screen and (max-width: 790px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`