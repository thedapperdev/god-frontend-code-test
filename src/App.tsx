import React from 'react';
// @ts-ignore
import { StyleProvider, ThemePicker } from 'vcc-ui';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
    <StyleProvider>
      <ThemePicker variant="light">
        <Home />
      </ThemePicker>
    </StyleProvider>
    </div>
  );
}

export default App;
