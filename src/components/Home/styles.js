import styled from "styled-components";

export const ContainerPrimary = styled.section`
    --margin-top-image: -50px;
    display: grid;
    grid-template-areas:
    'title title title'
    'article article comments'
    'article article comments'
    ;
    gap: 28px;
    width: 100%;
    h2{
        margin-bottom: calc((var(--margin-top-image) * -1));
        margin-top: 24px;
        font-family: var(--font-title);
        font-weight: 700;
        font-size: 2.75rem;
        color: var(--black);
        grid-area: title;
    }
    div:nth-child(2){
        grid-area: article;
    }
    div:nth-child(3){
        grid-area: comments;
        h3{
            display: inline-block;
            font-family: var(--font-title);
            font-weight: 700;
            font-size: 1.75rem;
            color: var(--black);
            margin-top: var(--margin-top-image);
            margin-bottom: 8px;
        }
        .container-comments{
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
            background-color: var(--background-secondary);
            padding: 6px;
            li{
                list-style: none;
                &::after{
                    content: 'O';
                }
            }
        }
    }
`