import React from 'react';
import StarIcon from './';

export default { title: 'StarIcon' };

export const withDefault = () => <StarIcon />;

export const withFilled = () => <StarIcon
  isFilled
  size={20}
/>;
