import styled, { keyframes } from "styled-components";

export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 1;
  position: relative;
`;

export const Video = styled.video`
  height: 100%;
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`;

export const ImageBanner = styled.img<{ fadingIn: boolean; duration: string }>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.fadingIn ? 1 : 0)};
  animation: ${(props) => {
    return props.fadingIn ? fadeIn : fadeOut;
  }};
  animation-duration: ${(props) => props.duration};
  animation-timing-function: ease-in-out;
`;
