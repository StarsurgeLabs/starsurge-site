import React from "react";
import styled from "@emotion/styled";
import FullScreen from "../full-screen";

const Wrapper = styled(FullScreen.header)`
  background-color: #000060;
  color: #f5f5f5;
`;

const Header = () => (
  <Wrapper>
    <FullScreen.content>
      <h1>Starsurge Labs</h1>
      <p>O início de seu novo projeto, começa aqui!</p>
    </FullScreen.content>
  </Wrapper>
);

export default Header;
