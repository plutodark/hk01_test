import React, { useEffect } from 'react';
import './style.scss';

const Spinner = () => {
  const lockScreen = (isLock) => {
    if (isLock) {
      document.body.style.overflow = "hidden"
      return null;
    }
    document.body.style.overflow = '';
    return null;

  };
  useEffect(() => {
    lockScreen(true);
    return () => lockScreen(false);
  }, []);
  return (
    <div className={'spinner'}>
        <div className={'spinner-background'} />
        <div className={'spinner-container'}>
          <img src={`${process.env.PUBLIC_URL}/spinner.svg`} alt='spinner' />
        </div>
    </div>
  );
}
export default Spinner;
