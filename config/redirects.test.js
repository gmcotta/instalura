import redirects from './redirects';

describe('config/redirects', () => {
  it('should render all current redirects', () => {
    expect(redirects).toMatchSnapshot();
  });
});
