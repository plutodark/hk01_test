import React from 'react';
import T from 'prop-types';

const StarIcon = ({ isFilled, size }) => {
  const color = '#ff9900';
  const height = size;
  const width = height * 1.0625;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 51 48'
    >
      <title>Five Pointed Star</title>
      <path
        fill={isFilled ? color : 'none'}
        stroke={color}
        d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'
      />
    </svg>
  );
}

StarIcon.defaultProps = {
  size: 11,
  isFilled: false,
};

StarIcon.propTypes = {
  size: T.number,
  isFilled: T.bool,
};

export default StarIcon;
