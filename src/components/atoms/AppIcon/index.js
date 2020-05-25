import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const AppIcon = ({ src, isCircle, className, style }) => {
  const jointedClassNames = classnames('app-icon', className, isCircle ? 'app-icon--circle' : '');
  return (
    <img
      src={src}
      className={jointedClassNames}
      style={style}
      alt='app-icon'
    />
  );
};
AppIcon.defaultProps = {
  src: '',
  isCircle: false,
  className: '',
  style: null,
};
AppIcon.propTypes = {
  src: T.string,
  isCircle: T.bool,
  className: T.string,
  style: T.object,

};

export default AppIcon;
