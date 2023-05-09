import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-auto-rows: 7rem;
    gap: .75rem;
    cursor: pointer;
    padding: 8px 4px;
    &:hover{
       background-color: var(--background-tertiary);
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
    }
    p::first-line{
        overflow: hidden;
        max-width: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`