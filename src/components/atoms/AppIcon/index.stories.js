import React from 'react';
import AppIcon from './';

export default { title: 'AppIcon' };

export const withDefault = () => (
  <AppIcon
    src='https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/f9/d5/9c/f9d59c68-de5e-c3f0-b558-62d5f71d92f2/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/53x53bb.png'
  />
);

export const withCircle = () => (
  <AppIcon
    isCircle
    src='https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/f9/d5/9c/f9d59c68-de5e-c3f0-b558-62d5f71d92f2/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/53x53bb.png'
  />
);
