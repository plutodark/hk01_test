import React from 'react';
import { useSelector } from 'react-redux';
import WithLoadRecommendedApps from '../../../hocs/WithLoadRecommendedApps';
import Container from './container';
import selector from './selector';


const RecommendedApps = () => {
  const items = useSelector(selector);
  return (
    <Container items={items} />
  );
}

export default WithLoadRecommendedApps(RecommendedApps);
