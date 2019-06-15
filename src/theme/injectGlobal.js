import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    html {
      font-size: 1em;
    }
    body {
      overflow-x: hidden;
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #555;
    }
    img {
      max-width: 100%;
    }
    ul,
    li {
      padding: 0;
      list-style: none;
    }
    a {
      color: #03A9F4;
      text-decoration: none;
      &:hover {
        color: #2196F3;
      }
    }
    * {
      box-sizing: border-box;
    }
    #root {
      width: 100%;
      float: left;
      overflow: hidden;
    }
    button,
    input {
      overflow: visible;
    }
    @keyframes loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
    .loading-animate {
      background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
      animation: loading 1.4s ease infinite;
      background-size: 400% 100%;
    }
`;
export default GlobalStyle;
