import styled from "styled-components"

export const Container = styled.div`
    & > a {
        display: flex;
        flex-direction: column;
        width: 18rem;
        max-height: 30rem;
        height: auto;
        background-color: var(--background-secondary);
        border-radius: 6px;
        overflow: hidden;
        transition: 0.25s;
    }
    &:hover{
            cursor: pointer;
            transform: scale(1.01);
            box-shadow:  1px 2px 4px rgba(0, 0, 0, 0.25);
    }  
`

export const Image = styled.div`
    width: 100%;
    height: 12rem;
    overflow: hidden;
    img{
        width: 100%;
        height: auto;
    }
`

export const Content = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
    div{
        text-align: center;
    }
    div.date span{
        font-size: 12px;
        color: var(--color-span);
        font-weight: 500;
    }
    div.content{
        margin-bottom: 10px;
        h3{
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: var(--black);
        }
        p{
            font-weight: 400;
            font-size: 16px;
            color: var(--color-span);
        }
        span{
            display: inline-block;
            margin-top: 6px;
            font-style: italic;
            font-size: 16px;
            color: var(--color-span);
            font-weight: 500;
        }
        strong{
            color: var(--color-purple-dark);
        }
    }
    div.link{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        div:nth-child(1){
            display: flex;
            align-items: center;
            gap: 4px;
            svg{
                height: 1.25rem;
                width: 1.25rem;
            }
        }
        div:nth-child(2){
            transition: transform 0.25s;
            &:hover{
            transform: scale(1.05);  
            }
        }
    }
`