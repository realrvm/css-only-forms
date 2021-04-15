import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  background: #f6f8ff;
}

.wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

@media (max-width: 800px) {
  .wrapper {
    flex-direction: column;
  }
}

ul {
  margin: 12px;
  padding: 0;
  list-style: none;
  width: 100%;
  max-width: 320px;
}

ul > li {
  margin: 16px 0;
  position: relative;
}
`;
