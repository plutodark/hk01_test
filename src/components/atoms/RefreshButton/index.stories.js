import React from 'react';
import { action } from '@storybook/addon-actions';
import RefreshButton from './';

export default { title: 'RefreshButton' };

export const withDefault = () => (
  <RefreshButton
    onClick={action('clicked')}
  />
);
