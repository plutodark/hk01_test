import React from 'react';
import { Provider } from 'react-redux';
import { SizeProvider } from '../../../contexts/SizeContext';
import Layout from './index';
import initialiseStore from '../../../store';

export default {
  title: 'Layout',
  decorators: [storyFn => <Provider store={initialiseStore()}><SizeProvider>{storyFn()}</SizeProvider></Provider>]
};

 export const withEmpty = () => (
   <Layout

   />
  );
