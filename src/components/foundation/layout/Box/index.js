import styled, { css } from 'styled-components';
import get from 'lodash/get';

import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('justifyContent')};
  ${propToStyle('alignItems')};
  ${propToStyle('flex')};
  ${propToStyle('flexWrap')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundColor')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('boxShadow')};
  ${propToStyle('padding')};
  ${propToStyle('width')};
  ${propToStyle('height')};
  ${propToStyle('listStyle')};
  ${propToStyle('margin')};
  ${propToStyle('marginLeft')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginBottom')};
  ${propToStyle('marginRight')};
  ${propToStyle('maxWidth')};
  ${propToStyle('maxHeight')};
  ${propToStyle('borderRadius')};
  ${({ theme, backgroundColorTheme }) => {
    const color = get(theme, `colors.${backgroundColorTheme}.color`);
    return css`
      background-color: ${color};
    `;
  }}
  ${({ theme, borderRadiusTheme }) => borderRadiusTheme && css`border-radius: ${theme.borderRadius}`};
`;

export default Box;
