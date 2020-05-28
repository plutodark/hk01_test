import _ from 'lodash';
const getTexts = (appItem) => {
  const value = appItem['im:name'].label + appItem.category.attributes.label + appItem.summary.label + appItem['im:artist'].label;
  return value.toLowerCase();
};
export const searchKeyword = (state, list) => {
  const keyword = state.getIn(['common', 'search']);
  if (_.isEmpty(keyword)) {
    return list;
  }
  const pattern = new RegExp(keyword.toLowerCase());
  return _.reduce(list, (result, obj) => {
    const value = getTexts(obj);
    return pattern.test(value) ? _.concat(result, obj) : result;
  }, []);
}
