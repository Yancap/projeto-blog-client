import styled from "styled-components";

export const Article = styled.div`
    background: var(--background-article);
    border-radius: 4px;
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25), 2px 2px 2px rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 600px){
        width: 100%;
        max-width: 30rem;
    }
`

export const Image = styled.div`
    margin-top: var(--margin-top-image);
    width: 26rem;
    border-radius: 4px;
    overflow: hidden;
    img{
        width: 100%;
        height: auto;
    }
    @media screen and (max-width: 450px){
        width: 20rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    div.date span{
        font-size: 12px;
        color: var(--color-span);
        font-weight: 500;
    }
    div.content{
        margin-bottom: 14px;
        h4{
            font-weight: 700;
            font-size: 1.75rem;
            line-height: 28px;
            color: var(--black);
        }
        p{
            font-weight: 400;
            font-size: 1rem;
            line-height: 19px;
            color: var(--color-span);
        }
    }
    div.info{
        span{
            font-style: italic;
            font-size: 16px;
            line-height: 19px;
            color: var(--color-span);
            font-weight: 500;
        }
        strong{
            color: var(--color-purple-dark);
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