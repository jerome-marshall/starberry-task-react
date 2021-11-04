import React from "react";
import { Button, StyledHeaderDiv } from "./HeaderElements";

const Header = ({ setIsLoggedIn }) => {
  return (
    <StyledHeaderDiv>
      <h1>Header Section</h1>
      <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
    </StyledHeaderDiv>
  );
};

export default Header;
