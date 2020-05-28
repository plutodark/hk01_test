import { configuredFetch } from './fetch';

describe('configuredFetch', () => {
  it('should fetch and return a promise', () => {
    return configuredFetch('https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json').then((result) => {
      expect(result).toBeDefined();
    });
  })
});
