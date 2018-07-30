import React from 'react';
import {render} from 'react-dom';
import App from './app/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const TradeApp = () => (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );
render( <TradeApp />, //virtual dom
    document.getElementById("root") //real dom
)