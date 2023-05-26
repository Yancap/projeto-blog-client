import styled from "styled-components";


export const Container = styled.section`
    padding: 1.75rem;
    background: var(--background-article);
    border-top: 14px solid var(--color-border);
    @media screen and (max-width: 790px){
        padding: 0px .75rem .75rem 1.75rem;
    }
`
export const Content = styled.form`
    background: #E8E8FA;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25), inset 2px 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
    input, textarea{ 
        box-shadow: .5px .5px 1px rgba(0, 0, 0, 0.25), inset .5px .5px 1px rgba(0, 0, 0, 0.2);
        background: transparent;
        border: none;
        width: 100%;
        max-width: 100%;
        overflow: visible;
        resize: none;
    }
    div.title textarea{
        font-size: 2rem;
        color: var(--black);
        font-family: var(--font-title);
        font-weight: 700;
    }
    div.subtitle textarea{
        font-style: italic;
        font-family: var(--font-title);
        font-size: 1.2rem;
        color: #575757;
    }
    div.text textarea{
        font-weight: 400;
        font-size: 1rem;
        color: #575757;
    }
    label.image {
        align-self: center;
        background: #aaa;
        width: 20rem;
        height: 14rem;
        border-radius: .25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;
        &:hover{
            mix-blend-mode: luminosity;
            opacity: 0.6;
        }
        p{
            font-weight: 700;
        }
        input{
            display: none;
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    gap: .5rem;
    button{
        padding: .5rem;
        font-size: 1.25rem;
        font-weight: 700;
        border: none;
    }
    button:nth-child(1){
        background: var();
    }
    button:nth-child(2){

    }
`