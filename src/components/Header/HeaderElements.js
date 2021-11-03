import styled from "styled-components";

export const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-grey);

  & h1 {
    padding: 15px;
    background-color: transparent;
    font-size: var(--fz-header);
    font-weight: 100;
  }
`;
