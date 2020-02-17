import React from 'react';
import Container from './Container'
import { createBrowserHistory } from 'history';
import './App.css'

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Container/>
    </div>
  );
}

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default App;
