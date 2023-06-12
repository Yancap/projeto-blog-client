import styled from "styled-components"

export const Container = styled.main`
    background: var(--background-body);
    max-width: 100vw;
    padding: .75rem 0rem;
    min-height: calc(100vh - 9.5rem);
    position: relative;
`

export const Content = styled.div`
    max-width: 55rem;
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
    display: grid;
    justify-content: flex-start;
    grid-template-columns: 1fr;
    min-height: calc(100vh - 9.5rem);
`