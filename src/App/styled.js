import styled, { createGlobalStyle } from "styled-components/macro"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }
  body {
    margin: 0;
    font-size: 1.6rem;
  }

  html, body, #root {
    height: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

export const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
