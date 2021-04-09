import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../Link';

const GhostButton = css`
  background-color: transparent;
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const DefaultButton = css`
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition};
  ${({ ghost }) => (ghost ? GhostButton : DefaultButton)};
  ${TextStyleVariantsMap.smallestException};
  
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${propToStyle('margin')};
  ${propToStyle('display')};

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
`;

export default function Button({ href, ...props }) {
  const hasHref = Boolean(href);
  const componentTag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper as={componentTag} href={href} {...props} />
  );
}

Button.defaultProps = {
  href: '',
};

Button.propTypes = {
  href: PropTypes.string,
};
