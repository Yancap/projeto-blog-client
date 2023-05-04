import styled from "styled-components";

export const Container = styled.div`
    padding: 16px;
    border-left: 3.5px solid;
`

export const Info = styled.div`
    display: flex;
    gap: 14px;
    margin-bottom: 2px;
    h5, span{
        font-size: 16px;
        width: auto;
        font-weight: 600;
        font-family: var(--font-title);
    }
    h5{
        color: var(--background-primary);
        max-width: 20ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 8px;
        gap: 6px;
        span{
            color: var(--color-purple-dark);
            opacity: 0.6;
        }
        &::before{
            content: ' ';
            height: 2px;
            background: var(--color-purple-dark);
            width: 2vw;
            margin-right: 4px;
            border-radius: 2px;
        }
        path{
            fill: var(--color-purple-dark);
        }
    }
`

export const Title = styled.h4`
    font-family: var(--font-title);
    font-weight: 700;
    font-size: 20px;
    color: var(--color-purple-dark);
    max-width: 30ch;
    line-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`
export const Text = styled.h5`
    font-family: var(--font-text);
    font-weight: 400;
    font-size: 16px;
    color: var(--color-span);

`