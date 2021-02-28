import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStypeVariantsMap = {
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `};
    ${breakpointsMedia({
      md: css`
        ${({theme}) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
    })}
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStypeVariantsMap[variant]};
  color: ${(props) => get(props.theme, `colors.${props.color}.color`) };
  ${propToStyle('textAlign')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginBottom')};


  ${({ tag }) => {
    if (tag === 'a') {
      return css`
        cursor: pointer;
      `;
    }
  }};
`;

export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  )
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node,
}