import React, {  useEffect } from 'react';
import T from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import AppListingItem  from '../../molecules/AppListingItem';
import RefreshButton from '../../atoms/RefreshButton';
import './style.scss';

const Container = ({ items, className, onReload, isLoading }) => {
  const jointedClassName = classnames('app-listing', className);
  const renderEmpty = () => (<div className='app-listing--empty'>沒有資料</div>);
  const renderItems = () => _.map(items, (obj, index) => (
    <AppListingItem item={obj} key={index} />
  ))

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          // you're at the bottom of the page
          console.log('reloading');
          onReload();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onReload]);
  const isEmpty = _.isEmpty(items);
  const renderRefresh = () => isLoading || isEmpty ? null : <RefreshButton onClick={onReload}/>;
  return (
    <div className={jointedClassName}>
      {isEmpty ? renderEmpty() : renderItems()}
      {renderRefresh()}
    </div>
  );
};

Container.defaultProps = {
  items: [],
  className: '',
  onReload: () => {},
  isLoading: false,
};
Container.propTypes = {
  items: T.array,
  className: T.string,
  onReload: T.func,
  isLoading: T.bool,
};

export default Container;
