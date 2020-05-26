import React from 'react';
import T from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import AppIcon from '../../atoms/AppIcon';
import Divider from '../../atoms/Divider';
import StarIcon from '../../atoms/StarIcon';
import './style.scss';

const AppListingItemContainer = ({
  num,
  iconSrc,
  label,
  categoryLabel,
  userRatingCount,
  rating,
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
  const renderRating = () => {
    const roundedRating = Math.round(rating);
    const renderFilledStar = () => _.times(roundedRating, (index) => <StarIcon key={`filled${index}`} isFilled />);
    const renderEmptyStar = () => _.times(5 - roundedRating, (index) => <StarIcon key={`empty${index}`} />);
    const renderRatingCount = () => <div>({userRatingCount})</div>;
    return (
      <div className='app-listing-item--container--details--rating'>
        {renderFilledStar()}
        {renderEmptyStar()}
        {renderRatingCount()}
      </div>
    );
  };
  const renderDetails = () => (
    <div className='app-listing-item--container--details'>
      <div>{label}</div>
      <div className='app-listing-item--container--details--category'>{categoryLabel}</div>
      {renderRating()}
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
  userRatingCount: 0,
  rating: 0,
  className: '',
};

AppListingItemContainer.propTypes = {
  num: T.number,
  iconSrc: T.string,
  label: T.string,
  categoryLabel: T.string,
  userRatingCount: T.number,
  rating: T.number,
  className: T.string,
};

export default AppListingItemContainer;
