import React, { useContext } from 'react';
import T from 'prop-types';
import _ from 'lodash';
import { SizeContext } from '../../../contexts/SizeContext';
import AppListingItemContainer from './container';
import { getIconSrc } from './helper';


const AppListingItem = ({num, item, className }) => {
  const { isTablet, isMobile } = useContext(SizeContext);
  const images = _.get(item, 'im:image', []);
  const iconSrc = getIconSrc(images, isTablet, isMobile);
  const label = _.get(item, 'title.label', '');
  const categoryLabel = _.get(item, 'category.attributes.label', '');
  const link = _.chain(item)
    .get('link', [])
    .find((o) => o.attributes.type === 'text/html')
    .get('attributes.href', '')
    .value();
  return (
    <AppListingItemContainer
      num={num}
      iconSrc={iconSrc}
      label={label}
      categoryLabel={categoryLabel}
      link={link}
      className={className}
    />
  );
};

AppListingItem.defaultProps = {
  className: '',
  num: 0,
  item: {},
};

AppListingItem.propTypes = {
  num: T.number,
  item: T.object,
  className: T.string,
};

export default AppListingItem;
