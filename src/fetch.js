import Promise from 'bluebird';
import _ from 'lodash';
import qs from 'qs';

export const configuredFetch = (url, opts = {}) => {
  opts.body = opts.body || {};
  opts.query = opts.query || {};

  opts.body = opts.body || {};
  if (_.get(opts, 'method', 'get').toLowerCase() === 'get') {
    opts.body = undefined;
  }

  const formattedUrl = `${url}?${qs.stringify(opts.query)}`;
  // console.log(`%c${formattedUrl}`, 'background: blue; color: white;');
  // console.log(opts.body);
  // console.log(opts.query);

  const defaultOpts = {
    //credentials: 'include',
  };

  const fetchOption = _.omit(Object.assign(defaultOpts, opts), ['json']);

  if (
    opts.json !== false &&
    !!opts.body &&
    typeof opts.body === 'object'
  ) {
    fetchOption.body = JSON.stringify(fetchOption.body);
    fetchOption.headers = Object.assign(
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      fetchOption.headers
    );
  }
  let error = false;

  return new Promise((resolve, reject) => {
    fetch(formattedUrl, fetchOption)
      .then(r => {
        if (r.status >= 400) {
          console.log(r.status);
          error = true;
        }
        return r.json();
      })
      .then(jsonResponse => {
        if (error) {
          const rejectError = new Error();
          rejectError.message = jsonResponse.message || 'Unknown Error';
          rejectError.status = jsonResponse.status;
          return reject(rejectError);
        }
        resolve(jsonResponse);
      })
      .catch(e => { console.log(e); reject(e); });
  });
};
