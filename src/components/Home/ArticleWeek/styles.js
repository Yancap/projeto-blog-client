import styled from "styled-components";

export const Article = styled.div`
    background: var(--background-article);
    border-radius: 4px;
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
            font-size: 24px;
            line-height: 28px;
            color: var(--color-purple-dark);
        }
        p{
            font-weight: 400;
            font-size: 16px;
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
        svg{
            margin-top: -6px;
        }
    }
    div.link:hover{
        opacity: 1;
        transform: scale(1.05);
    }
`