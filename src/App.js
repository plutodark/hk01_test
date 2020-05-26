import React from 'react';
import './App.css';
import { SizeProvider } from './contexts/SizeContext';
import Layout from './components/organisms/Layout';

function App() {
  return (
    <SizeProvider>
    <Layout />
    </SizeProvider>
  );
}

export default App;
