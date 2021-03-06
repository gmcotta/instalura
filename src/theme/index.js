import breakpoints from './breakpoints';
import typographyVariants from './typographyVariants';
import filter from './filter';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
    secondary: {
      color: '#D4D4D4',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  error: {
    main: {
      color: '#dc3545',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28a745',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {
      background: {
        light: {
          color: '#FFFFFF',
        },
        main: {
          color: '#181F22',
        },
      },
      borders: {
        main: {
          color: '#181F22',
        },
      },
      primary: {
        main: {
          color: '#F27895',
          contrastText: '#fff',
        },
      },
      secondary: {
        main: {
          color: '#FFA59A',
          contrastText: '#fff',
        },
      },
      tertiary: {
        main: {
          color: '#D5D5D5',
          contrastText: '#030506',
        },
        light: {
          color: '#FFF',
          contrastText: '#030506',
        },
      },
    },
  },
};

export default {
  colors,
  typographyVariants,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
  breakpoints,
  filter,
};
