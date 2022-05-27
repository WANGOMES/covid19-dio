import React from "react";
import { StylesProvider } from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import GlobalStyles from './commons/styles/global-styles.js'
import Main from './containers/Main'

function App() {
  return (
   <StylesProvider injectFirst>
     <CssBaseline />
     <GlobalStyles />
     <Main />
   </StylesProvider>
  );
}

export default App;
