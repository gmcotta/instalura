import React from 'react';
import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('justifyContent')};
  ${propToStyle('flex')};
  ${propToStyle('flexWrap')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundColor')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundPosition')};
`;

export default Box;
