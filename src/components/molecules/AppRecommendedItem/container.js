import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import AppIcon from '../../atoms/AppIcon';
import './style.scss';

const AppRecommendedItemContainer = ({
  iconSrc,
  label,
  categoryLabel,
  className,
  isMobile,
  isTablet,
}) => {

  const renderAppIcon = () => (
    <AppIcon
      src={iconSrc}
    />
  );
  const renderlabel = () => (<div className='app-recommended-item--label' style={{ maxWidth: iconWidth + 10 }}>{label}</div>);
  const renderCategory = () => (<div className='app-recommended-item--category'>{categoryLabel}</div>);
  const jointedClassNames = classnames('app-recommended-item', className);
  const getIconWidth = () => {
    if (isMobile) {
      return 53;
    }
    if (isTablet) {
      return 75;
    }
    return 100;
  }
  const iconWidth = getIconWidth();
  return (
    <div className={jointedClassNames} style={{ width: iconWidth + 20 }}>
      {renderAppIcon()}
      {renderlabel()}
      {renderCategory()}
    </div>
  );
};

AppRecommendedItemContainer.defaultProps = {
  iconSrc: '',
  label: '',
  categoryLabel: '',
  className: '',
  isMobile: false,
  isTablet: false,
};

AppRecommendedItemContainer.propTypes = {
  iconSrc: T.string,
  label: T.string,
  categoryLabel: T.string,
  className: T.string,
  isMobile: T.bool,
  isTablet: T.bool,
};

export default AppRecommendedItemContainer;
