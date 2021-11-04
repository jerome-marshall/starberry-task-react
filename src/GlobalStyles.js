import { createGlobalStyle } from "styled-components";

// Define the global styles
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
    --fz-xxs: 9px;
    --fz-xs: 11px;
    --fz-sm: 13px;
    --fz-md: 15px;
    --fz-lg: 19px;
    --fz-xl: 23px;
    --fz-xxl: 27px;
    --fz-heading-sm: 28px;
    --fz-heading-md: 32px;
    --fz-heading-lg: 36px;
    --fz-header: 30px;
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
    --max-width: 1200px;
  }
`;
export default GlobalStyles;
