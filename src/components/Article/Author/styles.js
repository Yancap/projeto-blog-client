import styled from "styled-components";

export const Container = styled.div`
    background: #D0CEF9;
    border-top: 14px solid var(--color-border);
    padding: 8px 0px;
    
`

export const Label = styled.div`
    margin: 8px 0;
    width: 100%;
    padding: 4px;
    background: var(--background-article);
    display: flex;
    align-items: center;
    justify-content: space-around;
    h3{
        font-size: 16px;
    }
    svg{
        padding: 4px;
    }
    div.line{
        height: 26px;
        width: 2px;
        background: var(--black);
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    div{
        height: 6.5rem;
        width: 8rem;
        background-color: #ccc;
        img{
            width: 100%;
            height: auto;
        }
    }
    h3{
        color: var(--color-purple-dark);
    }
`


export const Articles = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    justify-content: space-around;
    height: 80px;
    h4{
        font-size: 14px;
        font-family: var(--font-text);
        max-width: 20ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    p{
        font-size: 12px;
        color: #575757;
        font-style: italic;
        font-family: var(--font-text);
        max-width: 24ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    div:hover{
        h4{
            color: var(--color-border);
        }
        p{
            color: var(--color-purple-dark);
        }
    }
`