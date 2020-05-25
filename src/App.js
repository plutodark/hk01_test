import React from 'react';
import './App.css';
import { SizeProvider } from './contexts/SizeContext';

function App() {
  return (
    <SizeProvider>
    <div className="App">
      'hi'
    </div>
    </SizeProvider>
  );
}

export default App;
