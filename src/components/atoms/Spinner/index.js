import React from 'react';
import './style.scss';

const Spinner = () => (
  <div className={'spinner'}>
      <div className={'spinner-background'} />
      <div className={'spinner-container'}>
        <img src={`${process.env.PUBLIC_URL}/spinner.svg`} alt='spinner' />
      </div>
  </div>
);
export default Spinner;
