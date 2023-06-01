import styled from "styled-components";


export const Container = styled.article`
    display: grid;
    grid-template-columns:  8fr 2fr;
    height: 6rem;
    
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
        font-size: 1.25rem;
    }
    span{
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: .9rem;
        svg{
            height: .9rem;
            width: auto;
        }
        path{
            fill: #282773;
        }
        color: #7C7ABF;
        font-family: var(--font-title);
        font-weight: 700;
    }
    p{
        font-size: .9rem;
        color: #383838;
    }
`

export const Settings = styled.div`
    display: flex;
    align-items: center;
    height: 23px;
    gap: .5rem;
    button{
        border: 0;
        transition: all .2s;
        &:hover{
            transform: scale(1.2);
        }
        path{
            fill: ;
        }
    }
`
