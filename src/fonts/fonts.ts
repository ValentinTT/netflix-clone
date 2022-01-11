import { css } from "styled-components";
import NetflixSans from "fonts/NetflixSans/NetflixSansRegular.ttf";
import NetflixSansMedium from "fonts/NetflixSans/NetflixSansMedium.ttf";
import NetflixSansLight from "fonts/NetflixSans/NetflixSansLight.ttf";
import NetflixSansRegular from "fonts/NetflixSans/NetflixSansRegular.ttf";
import NetflixSansThin from "fonts/NetflixSans/NetflixSansThin.ttf";

export const fontsCSS = css`
  @font-face {
    font-family: "NetflixSans";
    src: local("NetflixSans"), local("NetflixSans"),
      url(${NetflixSans}) format("truetype");
    font-weight: 200;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: "NetflixSansLight";
    src: local("NetflixSansLight"), local("NetflixSansLight"),
      url(${NetflixSansLight}) format("truetype");
    font-weight: 200;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: "NetflixSansThin";
    src: local("NetflixSansThin"), local("NetflixSansThin"),
      url(${NetflixSansThin}) format("truetype");
    font-weight: 200;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: "NetflixSansRegular";
    src: local("NetflixSansRegular"), local("NetflixSansRegular"),
      url(${NetflixSansRegular}) format("truetype");
    font-weight: 200;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: "NetflixSansMedium";
    src: local("NetflixSansMedium"), local("NetflixSansMedium"),
      url(${NetflixSansMedium}) format("truetype");
    font-weight: 200;
    font-style: normal;
    font-display: block;
  }
`;
