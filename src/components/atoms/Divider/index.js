import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const Divider = ({ className }) => (
  <div className={classnames('divider', className )}/>
);

Divider.defaultProps = {
  className: '',
};
Divider.propTypes = {
  className: T.string,
};

export default Divider;
