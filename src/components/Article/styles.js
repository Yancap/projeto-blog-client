import styled from "styled-components"

export const ContainerPrimary = styled.section`
    display: grid;
    max-width: calc(100vw - 2rem);
    grid-template-columns: 4fr 1fr;
    gap: 16px;
    margin-top: 1rem;
    align-items: flex-start;
    @media screen and (max-width: 650px){
        grid-template-columns: 1fr;
        place-items: center;
    }
`

export const ContainerSecondary = styled.section`
    margin-top: 3rem;
    max-width: calc(100vw - 2rem);
`