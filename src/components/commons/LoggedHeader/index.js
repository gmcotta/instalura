import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../theme/Logo';
import TextField from '../../forms/TextField';
import Home from '../../../theme/icons/home';
import Add from '../../../theme/icons/add';
import Heart from '../../../theme/icons/heart';
import Search from '../../../theme/icons/search';
import { ButtonsArea, HeaderWrapper, SearchArea } from './HeaderWrapper';

export default function LoggedHeader({ onCreatePostClick }) {
  return (
    <HeaderWrapper>
      <HeaderWrapper.Content>
        <HeaderWrapper.LeftSide>
          <Logo size="medium" />
        </HeaderWrapper.LeftSide>
        <HeaderWrapper.RightSide>
          <SearchArea>
            <TextField placeholder="Pesquisar" marginBottom="0px" />
          </SearchArea>
          <ButtonsArea>
            <ButtonsArea.Add id="addPostButton" ghost onClick={onCreatePostClick}>
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

LoggedHeader.propTypes = {
  onCreatePostClick: PropTypes.func.isRequired,
};
