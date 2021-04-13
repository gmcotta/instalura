import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../../commons/Link';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

export const TextStyleVariantsMap = {
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
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
  })}
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]};
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  ${propToStyle('textAlign')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginBottom')};


  ${({ tag }) => {
    if (tag === 'a') {
      return css`
        cursor: pointer;
      `;
    }
    return css``;
  }};
`;

export default function Text({
  tag, variant, children, href, cmsKey, ...props
}) {
  const websitePageContext = useContext(WebsitePageContext);
  const componentContent = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  const hasHref = Boolean(href);
  if (hasHref) {
    return (
      <TextBase as={Link} variant={variant} href={href} {...props}>
        {componentContent}
      </TextBase>
    );
  }
  return (
    <TextBase as={tag} variant={variant} {...props}>
      {componentContent}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
  cmsKey: '',
};

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  cmsKey: PropTypes.string,
};
