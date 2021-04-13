import propToStyle from './index';

describe('propToStyle()', () => {
  describe('when receives a simple argument', () => {
    it('should render for a string', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: 'center' };

      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ textAlign: 'center' });
    });

    it('should render for a number', () => {
      const propToStyleResult = propToStyle('flex');
      const componentProps = { flex: 1 };

      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when receives an argument with breakpoints', () => {
    it('should render for only one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: { xs: 'center' } };

      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });

    it('should render for two or more breakpoints resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: { xs: 'center', md: 'right' } };

      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });
});
