import styled from "styled-components"

export const Container = styled.section`
    div.comment-logo{
        display: flex;
        gap: 6px;
        margin-bottom: 1.5rem;
        svg{
            width: 3rem;
            height: auto;
            path{
                fill: #282773;
            }
        }
        h2{
            font-size: 2.25rem;
        }
    }
`

export const Content = styled.div`
    
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    background-color: var(--background-article);
    padding: 6px;
    li{
        list-style: none;
    }
        
`

