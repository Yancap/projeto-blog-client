import styled from "styled-components";

export const Container = styled.div`
    padding: 6px;
    border-left: 1.5px solid;
`

export const Info = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 2px;
    h5, span{
        font-size: 14px;
        color: var(--background-primary);
        width: auto;
        font-weight: 300;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        &::before{
            content: ' ';
            height: 2px;
            background: var(--background-primary);
            width: 2vw;
            margin-right: 4px;
            border-radius: 2px;
        }
    }
`

export const Title = styled.h4`
    font-family: var(--font-title);
    font-weight: 700;
    font-size: 18px;
    color: var(--color-purple-dark);

`
export const Text = styled.h5`
    font-family: var(--font-text);
    font-weight: 400;
    font-size: 12px;
    color: var(--color-span);

`