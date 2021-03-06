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

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException};
      padding: 16px 13px;
      ${propToStyle('padding')};
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1};
      padding: 12px 26px;
      ${propToStyle('padding')};
    `,
  })}

  ${propToStyle('margin')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginRight')};
  ${propToStyle('marginBottom')};
  ${propToStyle('marginLeft')};
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('alignItems')};
  ${propToStyle('justifyContent')};
  ${propToStyle('padding')};
  ${propToStyle('position')};
  ${propToStyle('top')};
  ${propToStyle('right')};
  ${propToStyle('bottom')};
  ${propToStyle('left')};
  ${propToStyle('fontSize')};
  ${propToStyle('width')};
  ${propToStyle('height')};

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
