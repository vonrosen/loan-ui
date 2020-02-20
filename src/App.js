import React from 'react';
import Container from './Container'
import { createBrowserHistory } from 'history';
import './App.css'

require('dotenv').config()

function App() {
  return (
    <div>
      <div>
        <a href="https://github.com/vonrosen/loan-docs">Click here for architecture and code.</a>
      </div>
      <div className="App">
        <Container/>
      </div>
    </div>
  );
}

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default App;
