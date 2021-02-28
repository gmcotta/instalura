import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { TextStypeVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const GhostButton = css`
  background-color: transparent;
  color: ${({theme, variant}) => get(theme, `colors.${variant}.color`)};
`;

const DefaultButton = css`
  background-color: ${({theme, variant}) => get(theme, `colors.${variant}.color`)};
  color: ${({theme, variant}) => get(theme, `colors.${variant}.contrastText`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  
  border-radius: ${({theme}) => theme.borderRadius};
  transition: ${({theme}) => theme.transition};
  ${({ghost}) => ghost ? GhostButton : DefaultButton};
  ${TextStypeVariantsMap.smallestException};
  
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${propToStyle('margin')};
  ${propToStyle('display')};

  ${breakpointsMedia({
    xs: css`
      ${TextStypeVariantsMap.smallestException}
    `,
    md: css`
      ${TextStypeVariantsMap.paragraph1}
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

export default Button;
