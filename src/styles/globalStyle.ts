import { createGlobalStyle } from "styled-components";
import Colors from "styles/Colors";
import { fontsCSS } from "fonts/fonts";

const GlobalStyle = createGlobalStyle`
  *{    
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: NetflixSans, Helvetica, Sans-Serif;
  }

  body {
    background: ${Colors.gray};
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */      
  }
  ${fontsCSS}
`;

export default GlobalStyle;
