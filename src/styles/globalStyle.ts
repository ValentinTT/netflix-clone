import { createGlobalStyle } from "styled-components";
import Colors from "styles/Colors";
import { fontsCSS } from "fonts/fonts";

const GlobalStyle = createGlobalStyle`
  ${fontsCSS}
  *{    
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: 1.125rem "NetflixSans Medium";
    line-height: 1rem;
  }

  body {
    background: ${Colors.gray};
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */     
    overflow-x: hidden ;
  }
`;

export default GlobalStyle;
