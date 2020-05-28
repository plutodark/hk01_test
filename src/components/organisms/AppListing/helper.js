import _ from 'lodash';

export const getId = (appItem) => _.get(appItem, 'id.attributes["im:id"]', 0);

export const setId = (appItem, id) => _.assign({}, appItem, { id });
