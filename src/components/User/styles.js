import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0;
`
export const  Content = styled.div`
    padding: 2.5rem;
    background: var(--background-primary);
    border-radius: 4px;
    width: 60%;
    justify-self: self-start;
    align-self: center;
    @media screen and (max-width: 600px){
        width: 100%;
    }
`

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    color: #fff;
`

export const Form = styled.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div{
        display: flex;
        flex-direction: column;
    }
   label{
    font-family: var(--font-title);
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
   }
   input{
    background: #d9d9d9;
    border: none;
    border-radius: 4px;
    height: 2.25rem;
    padding-left: .5rem;
    font-size: 1.25rem;
   }
   a{
    color: #282773;
    text-decoration: underline;
   }
`

export const Submit = styled.button`
    align-self:  flex-start;
    background: #282773;
    border: none;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    font-family: var(--font-title);
    padding: .2rem 1rem;
    border-radius: .25rem;
    &.loading{
        filter: saturate(.1) contrast(.6);
    }
`

export const Datas = styled.div`
    opacity:.4;
    padding: 2.75rem;
    div{
        display: flex;
        flex-direction: column;
        gap: .25rem;
        margin-bottom: 1rem;
    }
`