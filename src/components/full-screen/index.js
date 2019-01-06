import styled from "@emotion/styled";

const FullScreen = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

FullScreen.section = styled.section`
  width: 90%;
`;

FullScreen.header = styled.header`
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

FullScreen.content = styled.section`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 90%;
`;

export default FullScreen;
