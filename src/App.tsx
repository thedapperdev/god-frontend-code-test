import React from 'react';
// @ts-ignore
import { StyleProvider, ThemePicker, Spacer } from 'vcc-ui';
import './App.css';
import Home from './pages/home';
import styled from 'styled-components';


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
