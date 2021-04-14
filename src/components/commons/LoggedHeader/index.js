import React from 'react';

import styled, { css } from 'styled-components';
import Logo from '../../../theme/Logo';
import TextField from '../../forms/TextField';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;

  ${breakpointsMedia({
    md: css`
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

HeaderWrapper.LeftSide = styled.div``;

HeaderWrapper.CentralSide = styled.div``;

HeaderWrapper.RightSide = styled.div``;

export default function LoggedHeader() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.LeftSide>
        <Logo />
      </HeaderWrapper.LeftSide>
      <HeaderWrapper.CentralSide>
        <TextField placeholder="Pesquisar" />
      </HeaderWrapper.CentralSide>
      <HeaderWrapper.RightSide>
        <Logo />
      </HeaderWrapper.RightSide>
    </HeaderWrapper>
  );
}
