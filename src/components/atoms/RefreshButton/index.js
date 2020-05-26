import React from 'react';
import T from 'prop-types';
import './style.scss';

const RefreshButton = ({ onClick }) => (
  <div className='refresh-button' onClick={onClick}>
    <img src={`${process.env.PUBLIC_URL}/refresh.svg`} alt='refresh' />
  </div>
);
RefreshButton.defaultProps = {
  onClick: () => {},
};

RefreshButton.propTypes = {
  onClick: T.func,
};
export default RefreshButton;
