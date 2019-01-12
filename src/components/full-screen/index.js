import styled from "@emotion/styled";

const FullScreen = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  width: 100%;
  &:after {
    border: 5px solid #a6ffcb;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    @media (min-width: 768px) {
      border: 20px solid #a6ffcb;
    }
  }
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
  text-align: center;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export default FullScreen;
