import styled from "styled-components"

export const Container = styled.header`
    background: var(--background-primary);
    width: 100%;
    min-height: 4.5rem;
    display: flex;
    align-items: center;
`

export const Content = styled.div`
    padding: .75rem 1rem;
    flex-grow: 1;
    max-width: 55rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: .75rem;
    > div{
        cursor: pointer;
    }
    div.social{
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
    div.login{
        display: grid;
        place-items: center;
    }
`
export const Search = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    flex-wrap: wrap;
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
