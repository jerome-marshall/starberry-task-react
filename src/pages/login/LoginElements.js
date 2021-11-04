import styled from "styled-components";

export const LoginWrapper = styled.div`
  background-color: var(--grey-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
  width: 400px;

  border-radius: 10px;
  padding: 30px 20px;
  /* padding: 30px 50px; */

  & h1 {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }
`;

export const InputContainer = styled.div`
  & input {
    height: 40px;
    width: 280px;
    margin: 10px;
    font-size: 15px;
    padding: 0 10px;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  margin: 0px;
  margin-top: 20px;
  color: #eee;
  background: #111;
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
