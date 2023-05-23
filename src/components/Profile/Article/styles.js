import styled from "styled-components";


export const Container = styled.article`
    display: grid;
    grid-template-columns: 3fr 8fr 1fr;
    min-height: 7.5rem;
    max-height: 8rem;
    
`
export const Image = styled.div`
    background: #ccc;
    overflow: hidden;
    margin-right: .5rem;
    display: grid;
    place-items: center;
    min-height: 7.5rem;
    max-height: 8.5rem;
    img{
        min-width: 100%;
        min-height: 100%;
        height: 100%;
        width: auto;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
        font-size: 1.25rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    span{
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: 1rem;
        svg{
            height: 1rem;
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
        font-size: 1rem;
        color: #383838;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
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
