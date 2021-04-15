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

export default function Home({ size }) {
  const { width, height } = sizes[size] || sizes.small;
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.1812 1.61412C15.6627 1.23963 16.3369 1.23963 16.8184 1.61412L28.8184 10.9474C29.1432 11.2001 29.3332 11.5885 29.3332 11.9999V26.6666C29.3332 27.7275 28.9117 28.7449 28.1616 29.495C27.4115 30.2452 26.394 30.6666 25.3332 30.6666H6.6665C5.60564 30.6666 4.58822 30.2452 3.83808 29.495C3.08793 28.7449 2.6665 27.7275 2.6665 26.6666V11.9999C2.6665 11.5885 2.85647 11.2001 3.18125 10.9474L15.1812 1.61412ZM5.33317 12.652V26.6666C5.33317 27.0202 5.47365 27.3593 5.72369 27.6094C5.97374 27.8594 6.31288 27.9999 6.6665 27.9999H25.3332C25.6868 27.9999 26.0259 27.8594 26.276 27.6094C26.526 27.3593 26.6665 27.0202 26.6665 26.6666V12.652L15.9998 4.35573L5.33317 12.652Z" fill="#D7385E" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6665 16.0001C10.6665 15.2637 11.2635 14.6667 11.9998 14.6667H19.9998C20.7362 14.6667 21.3332 15.2637 21.3332 16.0001V29.3334C21.3332 30.0698 20.7362 30.6667 19.9998 30.6667C19.2635 30.6667 18.6665 30.0698 18.6665 29.3334V17.3334H13.3332V29.3334C13.3332 30.0698 12.7362 30.6667 11.9998 30.6667C11.2635 30.6667 10.6665 30.0698 10.6665 29.3334V16.0001Z" fill="#D7385E" />
    </svg>
  );
}

Home.defaultProps = {
  size: 'small',
};

Home.propTypes = {
  size: PropTypes.string,
};
