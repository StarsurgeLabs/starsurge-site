import React from "react";
import styled from "@emotion/styled";

const FullScreen = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
`;

FullScreen.header = styled.header`
  height: 100vh;
  position: relative;
  width: 100%;
`;

FullScreen.content = styled.section`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export default FullScreen
