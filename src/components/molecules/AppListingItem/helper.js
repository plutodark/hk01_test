import _ from 'lodash';

const findRightIcon = (images, height) => {
  const src = _.chain(images)
  .find((o) => o.attributes.height === height)
  .get('label', '')
  .value();
  return _.isEmpty(src) ? _.get(images[0], 'label', '') : src;
}
export const getIconSrc = (images, isTablet, isMobile) => {
  if (isMobile) {
    return findRightIcon(images, "53");
  }
  if (isTablet) {
    return findRightIcon(images, "75");
  }
  return findRightIcon(images, "100");
};
