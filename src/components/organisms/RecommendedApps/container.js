import React from 'react';
import T from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import HorizontalMenu from '../../molecules/HorizontalMenu';
import AppRecommendedItem from '../../molecules/AppRecommendedItem';
import './style.scss';

const RecommendedAppsContainer = ({ items, className }) => {

  const jointedClassName = classnames( 'recommended-apps',className);
  const renderItems = () => _.map(items,(obj, index) => (
    <AppRecommendedItem
      key={index}
      item={obj}
    />
  ));
  const renderEmpty = () => (<div className='recommended-apps--empty'>暫時沒有推介</div>);
  return (
    <div className={jointedClassName}>
      <div className='recommended-apps--label'>推介</div>
      {_.isEmpty(items) ? renderEmpty() : (<HorizontalMenu
        items={renderItems()}
      />)}
    </div>
  );
};

RecommendedAppsContainer.defaultProps = {
  items: [],
  className: '',
};

RecommendedAppsContainer.propTypes = {
  items: T.array,
  className: T.string,
};

export default RecommendedAppsContainer;
