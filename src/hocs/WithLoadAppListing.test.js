import React from 'react';
import { Provider } from 'react-redux';
import initialiseStore from '../store';
import { render } from '@testing-library/react';
import WithLoadAppListing from './WithLoadAppListing';
import '@testing-library/jest-dom/extend-expect';

describe('HOC WithLoadAppListing', () => {
  let WithLoadAppListingComponent;
  beforeEach(() => {
    const baseComponent = () => {

      return (
        <div />
      );
    };
    WithLoadAppListingComponent = WithLoadAppListing(baseComponent);
  });


  it('translate about to About us', () => {

    const wrapper = render(<Provider store={initialiseStore()}><WithLoadAppListingComponent /></Provider>);
    console.log(wrapper.baseElement);
    expect(wrapper.baseElement).not.toBe(null);
  });
});
