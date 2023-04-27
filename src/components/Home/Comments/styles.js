import styled from "styled-components";

export const Container = styled.div`
    padding: 6px;
    border-left: 1.5px solid;
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 2px;
    h5, span{
        font-size: 14px;
        color: var(--background-primary);
        width: auto;
        font-weight: 300;
    }
    h5{
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
    max-width: 30ch;
    line-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`
export const Text = styled.h5`
    font-family: var(--font-text);
    font-weight: 400;
    font-size: 12px;
    color: var(--color-span);

`