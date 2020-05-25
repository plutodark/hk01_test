
import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import AppIcon from '../../atoms/AppIcon';
import Divider from '../../atoms/Divider';
import './style.scss';

const AppListingItemContainer = ({
  num,
  iconSrc,
  label,
  categoryLabel,
  link,
  className,
}) => {
  const renderNumber = () => (
    <div className='app-listing-item--container--num'>{num}</div>
  );
  const renderAppIcon = () => (
    <AppIcon
      src={iconSrc}
      isCircle={num%2 === 0}
    />
  );
  const renderDetails = () => (
    <div className='app-listing-item--container--details'>
      <div>{label}</div>
      <div className='app-listing-item--container--details--category'>{categoryLabel}</div>
    </div>
  );
  const jointedClassNames = classnames('app-listing-item', className);
  return (
    <div className={jointedClassNames}>
      <Divider />
      <div className={'app-listing-item--container'}>
        {renderNumber()}
        {renderAppIcon()}
        {renderDetails()}
      </div>
    </div>
  );
};

AppListingItemContainer.defaultProps = {
  num: 0,
  iconSrc: '',
  label: '',
  categoryLabel: '',
  link: '',
  className: '',
};

AppListingItemContainer.propTypes = {
  num: T.number,
  iconSrc: T.string,
  label: T.string,
  categoryLabel: T.string,
  link: T.string,
  className: T.string,
};

export default AppListingItemContainer;
