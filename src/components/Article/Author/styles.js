import styled from "styled-components";

export const Container = styled.div`
    background: var(--background-primary);
    border-top: 14px solid var(--color-border);
    height: 400px;
    
`

export const Label = styled.div`
    margin: 8px 0;
    width: 100%;
    padding: 4px;
    background: var(--background-secondary);
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

`

export const Articles = styled.div`

`