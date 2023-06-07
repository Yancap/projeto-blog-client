import styled from "styled-components";

export const Span = styled.span`
    font-size: 12px;
    font-weight: bold;
    &.error{
        color: var(--red);
    }
    &.success{
        color: var(--green); 
    }
`