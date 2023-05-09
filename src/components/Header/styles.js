import styled from "styled-components"

export const Container = styled.header`
    background: var(--background-primary);
    width: 100%;
    height: 4.5rem;
`

export const Content = styled.div`
    padding: .75rem 0rem;
    max-width: 55rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
export const Search = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    div:nth-child(1){
        display: flex;
        justify-content: space-between;
        gap: 15px;
        svg path{
            fill: white;   
        }
    }
    form{
        display: flex;
        align-items: center;
        input, button{
            border: none;
            height: 1.7rem;
        }
        button{
            width: 30px;
            background: var(--background-btn-search);
            svg{
                height: 65%;
                width: auto;
            }
        }
        input{
            padding-left: 8px;
        }
        border-radius: 0.2rem;
        overflow: hidden;
    }
    div:nth-child(3){
        display: grid;
        place-items: center;
    }
`
