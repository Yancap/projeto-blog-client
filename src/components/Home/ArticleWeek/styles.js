import styled from "styled-components";

export const Article = styled.div`
    background-color: var(--background-article);
    box-sizing: border-box;
    padding: .5rem;
    border-radius: 4px;
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 600px){
        width: 100%;
        max-width: 30rem;
    }
`

export const Image = styled.div`
    /* margin-top: var(--margin-top-image); */
    height: 15rem;
    width: 26rem;
    border-radius: 4px;
    border: 2px solid var(--background-article);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: auto;
        height: 100%;
    }
    @media screen and (max-width: 450px){
        width: 20rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px;
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    div.date span{
        font-size: 14px;
        color: var(--color-border);
        font-weight: 500;
    }
    div.content{
        margin-bottom: 14px;
        display: flex;
        flex-direction: column;
        gap: .75rem;
        h4{
            font-weight: 700;
            font-size: 1.75rem;
            color: var(--black);
        }
        p{
            font-weight: 400;
            font-size: 1rem;
            color: var(--color-span);
        }
    }
    div.info{
        span{
            font-size: 16px;
            color: var(--color-span);
            font-weight: 300;
        }
        strong{
            color: var(--color-purple-dark);
        }
        p {
            color: var(--color-border);
        }
        div {
            display: flex;
            width:auto;
            flex-direction: row;
            gap: 4px;
            margin: 10px 0px;
            span{
                color: black;
            }
        }
    }
    div.link{
        cursor: pointer;
        opacity: 0.6;
        transition:  0.25s ease-in;
        > a {
            display: flex;
            flex-direction: column;
        }
        svg{
            margin-top: -6px;
        }
    }
    div.link:hover{
        opacity: 1;
        transform: scale(1.05);
    }
`