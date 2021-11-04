import styled from "styled-components";

export const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: flex-start; /* adjustment */
  position: relative; /* new */
  align-items: center;
  background-color: var(--background-grey);
  /* padding: 15px; */
  padding-right: 20px;
  height: 70px;

  & h1 {
    position: absolute; /* new */
    left: 50%;
    transform: translateX(-50%);

    background-color: transparent;
    font-size: var(--fz-header);
    font-weight: 100;
  }
`;

export const Button = styled.button`
  flex: 0 1 auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  color: #eee;
  background: #111;
  /* width: 20px; */
  font-size: var(--fz-sm);
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: solid white;
  padding: 10px 20px;
  transition: var(--transition);

  &:hover {
    background: #444;
    /* color: #010606; */
  }
`;
