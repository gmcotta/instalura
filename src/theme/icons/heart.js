import React from 'react';
import PropTypes from 'prop-types';

const sizes = {
  small: {
    width: 24,
    height: 24,
  },
  large: {
    width: 32,
    height: 32,
  },
};

export default function Heart({ size }) {
  const { width, height } = sizes[size] || sizes.small;
  return (
    <svg width={width} height={height} viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.7867 4.1469C27.1057 3.46558 26.2971 2.9251 25.4071 2.55635C24.5172 2.1876 23.5633 1.9978 22.6 1.9978C21.6367 1.9978 20.6828 2.1876 19.7929 2.55635C18.9029 2.9251 18.0943 3.46558 17.4133 4.1469L16 5.56024L14.5867 4.1469C13.2111 2.77131 11.3454 1.99852 9.4 1.99852C7.45462 1.99852 5.58892 2.77131 4.21333 4.1469C2.83774 5.52249 2.06494 7.38819 2.06494 9.33357C2.06494 11.2789 2.83774 13.1446 4.21333 14.5202L5.62666 15.9336L16 26.3069L26.3733 15.9336L27.7867 14.5202C28.468 13.8392 29.0085 13.0307 29.3772 12.1407C29.746 11.2508 29.9358 10.2969 29.9358 9.33357C29.9358 8.37025 29.746 7.41637 29.3772 6.52643C29.0085 5.63648 28.468 4.82791 27.7867 4.1469V4.1469Z" stroke="black" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
}

Heart.defaultProps = {
  size: 'small',
};

Heart.propTypes = {
  size: PropTypes.string,
};
