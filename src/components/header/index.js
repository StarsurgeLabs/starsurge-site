import React from "react";
import styled from "@emotion/styled";
import FullScreen from "../full-screen";

import video from "../../assets/videos/bg.webm";

const Wrapper = styled(FullScreen.header)`
  background-color: #000060;
  color: #f5f5f5;
  max-height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  display: none;
  @media (min-width: 1360px) {
    display: block;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  background-image: linear-gradient(
    150deg,
    #53f 15%,
    rgba(0, 0, 96, 0.7) 70%,
    #a6ffcb 100%
  );
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Title = styled.h1`
  border: 0;
  font-size: 4rem;
  margin-bottom: 0;
  text-shadow: 1px 1px #a6ffcb, 2px 2px #53f, 3px 3px #53f;
`;

const Start = styled.button`
  background: transparent;
  border: 3px solid #a6ffcb;
  border-radius: 50px;
  color: #a6ffcb;
  cursor: pointer;
  padding: 10px 20px;
`;

const Header = () => (
  <Wrapper>
    <Video autoPlay muted loop id="video">
      <source src={video} type="video/webm" />
    </Video>
    <Overlay />
    <FullScreen.content>
      <Title>Starsurge</Title>
      <p>O início de seu novo projeto, começa aqui!</p>
      <Start>Comece aqui!</Start>
    </FullScreen.content>
  </Wrapper>
);

export default Header;
