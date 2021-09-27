import { css } from "styled-components";
import NetflixSans from "fonts/NetflixSans/NetflixSansRegular.ttf";

export const fontsCSS = css`
  @font-face {
    font-family: "NetflixSans";
    src: local("NetflixSans"), local("NetflixSans"),
      url(${NetflixSans}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
`;
