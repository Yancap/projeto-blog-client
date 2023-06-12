import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 10rem 5fr;
    grid-auto-rows: 8rem;
    gap: .75rem;
    cursor: pointer;
    padding: 8px 4px;
    &:hover{
       background-color: var(--background-tertiary);
    }
    @media screen and (max-width: 700px) {
        grid-auto-rows: 9rem;
    }
    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 350px) {
        align-items: center;
    }
`

export const Image = styled.div`
    background-color: #ccc;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-height: 100%;
        width: auto;
    }
    @media screen and (max-width: 500px) {
        width: 18rem;
        height: 12rem;
    }
    @media screen and (max-width: 350px) {
        width: 12rem;
        height: 8rem;
    }
`

export const Content = styled.div`
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    gap: .35rem;
    overflow: hidden;
    
    h2{
        font-size: 1.5rem;
    }
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        span{
            font-family: var(--font-title);
            font-size: 1rem;
            font-weight: 700;
            color: var(--color-purple-dark);
            opacity: 0.7;
        }
        div{
            display: flex;
            align-items: center;
            gap: 4px;
        }
        svg{
            height: 1rem;
            width: auto;
            
            path{
                fill: var(--color-border);
            }
        }
        @media screen and (max-width: 350px) {
            justify-content: space-around;
        }
    }
    p{
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    @media screen and (max-width: 350px) {
        text-align: center;
    }
`