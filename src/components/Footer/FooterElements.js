import styled from "styled-components";

export const StyledFooterDiv = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-grey);
  /* max-width: 100%; */
  /* margin-top: 20px; */

  & h1 {
    padding: 15px;
    background-color: transparent;
    font-size: var(--fz-header);
    font-weight: 100;
  }
`;
