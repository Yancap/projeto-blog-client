import styled from "styled-components"

export const Container = styled.main`
    background: var(--background-body);
    width: 100%;
    padding: .75rem 3rem;
    min-height: calc(100vh - 9.5rem);
`

export const Content = styled.div`
    max-width: 55rem;
    margin: 0 auto;
    display: grid;
    justify-content: flex-start;
    grid-template-columns: 1fr;
    min-height: calc(100vh - 9.5rem);
`