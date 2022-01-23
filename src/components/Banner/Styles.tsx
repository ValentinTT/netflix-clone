import styled from "styled-components";
import { device } from "styles/Breakpoints";

export const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 1;
  position: relative;
`;

export const Video = styled.video<{ isPlaying: boolean }>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.isPlaying ? "1" : "0")};
`;

export const ImageBanner = styled.img<{ fadingIn: boolean; duration: string }>`
  width: 100%;
  opacity: ${(props) => (props.fadingIn ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

export const PlayButton = styled.button`
  color: #000;
  background-color: #ffffff;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 0.1rem 0.5rem;
  ${device.sm`padding: 0.3rem 1.2rem`};
  ${device.md`padding: 0.3rem 1.2rem`};
  font-size: 0.3rem;
  ${device.sm`font-size: 0.5rem`};
  ${device.md`font-size: 0.9rem`};

  border-radius: 0.2rem;
  border: 0;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #ffffffc7;
  }
  & > span {
    font-size: 0.3rem;
    ${device.sm`font-size: 0.5rem`};
    ${device.md`font-size: 1rem`};
    line-height: 0.5rem;
    ${device.sm`line-height: 1rem`};
    ${device.md`line-height: 1.6rem`};
    margin-left: 1rem;
    font-weight: 100;
  }
`;

export const MoreInfoButton = styled(PlayButton)`
  background-color: #a1a1a1c7;
  color: #fff;
  &:hover {
    background-color: #a1a1a1ae;
  }
`;

export const BannerInfo = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  top: 0;
  bottom: 35%;
  left: 4%;
  width: 36%;
  ${device.md`width: 40%;`};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > div {
    & > img {
      background-color: transparent;
      color: transparent;
      width: 100%;
      transform: ${(props) => props.isPlaying && "scale(0.7)"};
      transform-origin: bottom left;
      transition: transform 1.5s;
      transition-delay: 1.5s;
    }
    & > p {
      width: ${(props) => (props.isPlaying ? "0" : "90%")};
      margin-top: 1rem;
      font-weight: 400;
      font-family: NetflixSansRegular;
      font-size: 0.3rem;
      ${device.sm`font-size: 0.7rem`};
      ${device.md`font-size: 1rem`};
      ${(props) => props.isPlaying && "font-size: 0 !important;"};
      line-height: 1.4em;
      opacity: ${(props) => (props.isPlaying ? "0" : "1")};
      transition: font-size 1.5s, width 1.5s, opacity 0.5s;
      transition-delay: 1.5s;
    }
    & > div {
      margin-top: 1rem;
      background: transparent;
      width: fit-content;
      display: flex;
      justify-content: left;
      align-items: center;
      & > * {
        margin-right: 0.7rem;
      }
    }
  }
`;

export const CircleButton = styled.button`
  border-radius: 50%;
  border: 2px solid #e6e6e6e3;
  padding: 0.4rem;
  color: #e6e6e6e3;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #ffffff29;
  }
`;

export const BannerRightInfo = styled.div`
  position: absolute;
  top: 65%;
  right: 0;
  background-color: transparent;
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  & > span {
    background-color: #32454176;
    border-left: 0.2rem solid #fff;
    margin-left: 0.7rem;
    padding: 0.3rem;
    height: fit-content;
    padding-right: 2rem;
    font-size: 0.7rem;
    font-weight: 100;
  }
`;

export const BannerOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0);
  background: linear-gradient(
    0deg,
    rgba(20, 20, 20, 10) 0%,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0) 100%
  );
  display: flex;
  align-items: flex-start;
  padding-top: 70px;
  z-index: 10;
`;
