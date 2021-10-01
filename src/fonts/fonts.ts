import { css } from "styled-components";
import NetflixSans from "fonts/NetflixSans/NetflixSansRegular.ttf";
import NetflixSansMedium from "fonts/NetflixSans/NetflixSansMedium.ttf";

export const fontsCSS = css`
  @font-face {
    font-family: "NetflixSans";
    src: local("NetflixSans"), local("NetflixSans"),
      url(${NetflixSans}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "NetflixSans Medium";
    src: local("NetflixSans Medium"), local("NetflixSans Medium"),
      url(${NetflixSansMedium}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
`;
