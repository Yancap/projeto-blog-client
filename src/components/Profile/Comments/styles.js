import styled from "styled-components";


export const Container = styled.article`
    display: grid;
    grid-template-columns:  8fr 2fr;
    width: 100%;
    background-color: #ededed;
    padding: .5rem 1rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    h3{
        font-size: 1.25rem;
    }
    span{
        font-size: .9rem;
        max-width: 60ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
        svg{
            display: inline-block;
            height: .9rem;
            width: auto;
            margin-right: .35rem;
            top: 50%;
            position: relative;
            transform: translateY(-50%);
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
            fill: #222;
        }
    }
`
