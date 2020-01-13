import React from 'react';
import PaymentInput from './PaymentInput/PaymentInput'

import './App.css'

function App() {
  return (
    <div className="App">
      <PaymentInput placeholder="$0.00" type="text" onChange={() => { console.log('changed!') }}/>
    </div>
  );
}

export default App;
