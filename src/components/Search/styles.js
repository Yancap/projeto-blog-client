import styled from "styled-components";

export const Container = styled.section`
    max-width: 800px;
    min-height: calc(100vh - 4.5rem - 5rem);
    display: grid;
    grid-template-rows: 150px auto;
`

export const ContentSearch = styled.div`
    width: 100%;
    margin: 2.5rem 0 ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    div.result{
        span{
            font-size: 1.2rem;
        }
        strong{
            color: #4EBA52;
        }
    }
    div.search{
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
            height: 2rem;
            cursor: pointer;
            svg{
                transform: rotate(90deg);
                transition: .25s;
                height: 70%;
                width: auto;
            }
            &:hover{
                svg{
                    transform: rotate(90deg) scale(1.3);
                }
            }
        }
        form{
            width: 70%;
            height: 2rem;
            display: flex;
            align-items: center;
        }
        input, button{
            height: 100%;
        }
        input{
            box-sizing: border-box;
            background: #FFFFFF;
            border-width: 0px 1px 1px 0px;
            border-style: solid;
            border-color: #282773;
            width: 90%;
            padding-left: .75rem;
            font-size: 1.2rem;
        }
        button{
            border: none;
            width: 2.2rem;
            background: var(--background-btn-search);
            border-radius: 0px 4px 4px 0px;
            svg{
                height: auto;
                width: 65%;
            }
        }
    }
`

export const ContentResult = styled.div`
    margin: 2.5rem 0 ;
    background: var(--background-secondary);
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > span{
        text-align: center;
        font-size: 1.5rem;
        color: var(--color-text);
    }
`