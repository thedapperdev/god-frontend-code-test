import React from 'react';
// @ts-ignore
import { StyleProvider, ThemePicker, Spacer } from 'vcc-ui';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
    <StyleProvider>
      <ThemePicker variant="light">
        <Spacer />
        <Home />
        <Spacer />
      </ThemePicker>
    </StyleProvider>
    </div>
  );
}

export default App;
