import styled from "styled-components";

export const ContainerPrimary = styled.section`
    --margin-top-image: -50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    width: 100%;
    h2{
        margin-bottom: calc((var(--margin-top-image) * -1) + 16px);
    }
`