import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #fff;
    --background-grey: #eee;
    --grey-100: #ddd;
    --grey-300: #bbb;
    --grey-500: #999;
    --grey-700: #888;
    --grey-900: #777;
    --max-width: 1000px;
    --fz-xs: 15px;
    --fz-sm: 18px;
    --fz-md: 20px;
    --fz-lg: 23px;
    --fz-xl: 27px;
    --fz-xxl: 32px;
    --fz-heading-sm: 28px;
    --fz-heading-md: 32px;
    --fz-heading-lg: 36px;
    --fz-header: 50px;
    --border-radius: 30px;
    --margin-md: 24px;
    --margin-lg: 32px;
    --padding-xs: 14px;
    --padding-sm: 18px;
    --padding-md: 24px;
    --padding-lg: 32px;
    --line-height-sm: 1.6;
    --transition: all 0.3s ease-in-out;
    --nav-height: 60px
    --max-width: 1500px;
  }
`;
export default GlobalStyles;

export const landScapeMediaQueries = css`
  @media screen and (max-height: 600px) {
    height: 120vh;
  }

  @media screen and (max-height: 500px) {
    height: 150vh;
  }
  @media screen and (max-height: 360px) {
    height: 180vh;
  }
`;
