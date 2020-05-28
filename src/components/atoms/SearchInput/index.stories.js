import React, { useState } from 'react';
import { INPUT_CHANGE, INPUT_ENTER } from './constants';
import SearchInput from './container';

const SearchContainer = () => {
  const [value, setValue]= useState('');
  const onEvent = ({ command, value }) => {
    switch (command) {
      case INPUT_CHANGE:
        return setValue(value);
      case INPUT_ENTER:
        alert('enter');
        break;
      default:
        break;
    }
  };
  return (<SearchInput value={value} handleEvent={onEvent} />);
};
export default { title: 'SearchInput' };

export const withDefault = () => {

  return (<SearchContainer />);
};
