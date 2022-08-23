import { addDecorator } from '@storybook/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../src/themes'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea { 
    padding:0;
    margin:0;
    font-family: -apple-system,
    BlinkMacSystemFont,SegoeUI, Roboto, Oxygen, Ubuntu, Cantarell, FiraSans, DroidSans, HelveticaNeue, sansserif;
  }
  * {
    boxsizing: borderbox ;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: .25s;
    color: #000;
  }

  ol, ul {
    list-style: none;
  }
`

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    < GlobalStyle />
    {story()}
  </ThemeProvider >
))

