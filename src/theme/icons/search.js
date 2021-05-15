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

export default function Search({ size }) {
  const { width, height } = sizes[size] || sizes.small;
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#88989E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#88989E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
}

Search.defaultProps = {
  size: 'small',
};

Search.propTypes = {
  size: PropTypes.string,
};
