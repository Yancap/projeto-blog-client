import styled from "styled-components";


export const Container = styled.article`
    display: grid;
    grid-template-columns: 3fr 8fr 1fr;
    height: 8rem;
    
`
export const Image = styled.div`
    background: #ccc;
    margin-right: .5rem;
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
    display: grid;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    width:0%;
    transition: all .5s;
    &.active{
        visibility: visible;
        width: 100%;
        opacity: 1;
    }
    button{
        border: 0;
        transition: filter .2s;
        &:hover{
            filter: brightness(.9);
        }
    }
    button.delete{
        background: var(--red);
    }
    button.edit{
        background: var(--yellow);
    }
`
