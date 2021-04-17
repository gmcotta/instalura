import React from 'react';

import styled, { css } from 'styled-components';
import Logo from '../../../theme/Logo';
import TextField from '../../forms/TextField';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Home from '../../../theme/icons/home';
import Add from '../../../theme/icons/add';
import Heart from '../../../theme/icons/heart';
import Search from '../../../theme/icons/search';

const HeaderWrapper = styled.nav`
  background-color: #FFF;
  margin-top: 18px;
  padding: 12px 28px;
  border-radius: 24px 24px 0 0;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  ${breakpointsMedia({
    md: css`
      position: relative;
      margin-top: 0;
      padding: 28px 0;
      border-radius: 0;
    `,
  })}
`;

HeaderWrapper.Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;

  ${breakpointsMedia({
    md: css`
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

HeaderWrapper.LeftSide = styled.div`
  display: none;
  ${breakpointsMedia({
    md: css`
      display: inline;
    `,
  })}
`;

HeaderWrapper.RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${breakpointsMedia({
    md: css`
      max-width: 70%;
    `,
  })}
`;

const SearchArea = styled.div`
  display: none;
  ${breakpointsMedia({
    md: css`
      display: inline;
    `,
  })}
  margin-right: 54px;
  width: 320px;
`;

const ButtonsArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  ${breakpointsMedia({
    md: css`
      max-width: 300px;
    `,
  })}
`;

ButtonsArea.Add = styled.div`
  order: 3;
  ${breakpointsMedia({
    md: css`
      order: 1;
    `,
  })}
`;
ButtonsArea.Home = styled.div`
  order: 1;
    ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })}
`;
ButtonsArea.Heart = styled.div`
  order: 4;
    ${breakpointsMedia({
    md: css`
      order: 3;
    `,
  })}
`;
ButtonsArea.Search = styled.div`
  order: 2;
  display: inline;
  ${breakpointsMedia({
    md: css`
      display: none;
      order: 
    `,
  })}
`;
ButtonsArea.Profile = styled.div`
  order: 5;
    ${breakpointsMedia({
    md: css`
      order: 4;
    `,
  })}
`;

export default function LoggedHeader() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.Content>
        <HeaderWrapper.LeftSide>
          <Logo />
        </HeaderWrapper.LeftSide>
        <HeaderWrapper.RightSide>
          <SearchArea>
            <TextField placeholder="Pesquisar" marginBottom="0px" />
          </SearchArea>
          <ButtonsArea>
            <ButtonsArea.Add>
              <Add size="large" />
            </ButtonsArea.Add>
            <ButtonsArea.Home>
              <Home size="large" />
            </ButtonsArea.Home>
            <ButtonsArea.Heart>
              <Heart size="large" />
            </ButtonsArea.Heart>
            <ButtonsArea.Profile>
              <img src="/images/Avatar.png" width="32" alt="Profile" />
            </ButtonsArea.Profile>
            <ButtonsArea.Search>
              <Search size="large" />
            </ButtonsArea.Search>
          </ButtonsArea>
        </HeaderWrapper.RightSide>
      </HeaderWrapper.Content>
    </HeaderWrapper>
  );
}
