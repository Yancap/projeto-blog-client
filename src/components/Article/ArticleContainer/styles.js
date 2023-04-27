import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 1.75rem 1.75rem 1.75rem;
    background: var(--background-article);
    border-top: 14px solid var(--color-border);
`

export const LabelLogo = styled.div`
    height: 4rem;
    width: 14rem;
    background-color: var(--color-border);
    border-radius: 0px 0px 7px 7px;
    margin-bottom: 1.75rem;
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
`

export const Text = styled.div`
    margin-top: 1rem;
    div.image{
        width: 346.67px;
        height: 264.22px;
        background-color: #ccc;
        float: left;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
`