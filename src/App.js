import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { SizeProvider } from './contexts/SizeContext';
import Layout from './components/organisms/Layout';
import reduxStore from './store';

function App() {
  return (
    <Provider store={reduxStore()}>
      <SizeProvider>
        <Layout />
      </SizeProvider>
    </Provider>
  );
}

export default App;
