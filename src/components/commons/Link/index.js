import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.color`)}`
    : 'color: inherit'
  )};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
