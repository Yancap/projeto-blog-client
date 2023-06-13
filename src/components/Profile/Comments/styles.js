import styled from "styled-components";


export const Container = styled.article`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ededed;
    padding: .5rem 1rem;
    @media screen and (max-width: 400px){
        padding: .5rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    h3{
        font-size: 1.25rem;
    }
    div.time{
        display: flex;
        gap: .25rem;
        svg{
            flex-shrink: 0;
            display: inline-block;
            height: 1rem;
            width: auto;
            margin-right: .35rem;
            top: 50%;
            position: relative;
            transform: translateY(-50%);
        }
        path{
            fill: #282773;
        }
    }
    span{
        font-size: .9rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
        
        color: #7C7ABF;
        font-family: var(--font-title);
        font-weight: 700;
    }
    p{
        font-size: .9rem;
        color: #383838;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
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
            fill: #222;
        }
    }
`
