import styled from "styled-components"

export const Container = styled.section`
    div.comment-logo{
        display: flex;
        gap: 12px;
        margin-bottom: 1.5rem;
        svg{
            width: 2.5rem;
            height: auto;
            path{
                fill: #282773;
            }
        }
        h2{
            font-size: 2rem;
           
        }
        @media screen and (max-width: 500px){
            h2{
                font-size: 1.75rem;
            }
             svg{
                 width: 2.5rem;
             }   
        }
    }
`

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    label{
        font-family: var(--font-title);
        font-weight: 700;
        font-size: 1.75rem;
    }
    textarea, input{
        resize: none;
        box-sizing: border-box;
        padding: .25rem .5rem;
        font-size: 1rem;
    }
    span{
        font-size: 12px;
        font-weight: bold;
        &.error{
            color: var(--red);
        }
        &.success{
           color: var(--green); 
        }
    }
    button{
        align-self: flex-start;
        border: none;
        background: var(--background-primary);
        font-size: 1rem;
        color: #fff;
        padding: .5rem .75rem;
        border-radius: .25rem;
        transition: all .25s;
        &:hover{
            background: var(--background-btn-search);
        }
    }
`

export const Content = styled.div`
    
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    background-color: var(--background-article);
    padding: 6px;
    li{
        list-style: none;
    }
        
`

