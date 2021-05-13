import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import { parseCookies } from 'nookies';
import Logo from '../../../theme/Logo';
import TextField from '../../forms/TextField';
import Home from '../../../theme/icons/home';
import Add from '../../../theme/icons/add';
import Heart from '../../../theme/icons/heart';
import Search from '../../../theme/icons/search';
import {
  ButtonsArea, HeaderWrapper, SearchArea, MobileLogoArea,
} from './HeaderWrapper';

export default function LoggedHeader({ onCreatePostClick, onProfileModalClick }) {
  const [userInfo, setUserInfo] = useState({
    user: '',
    username: '',
    photoUrl: '',
    description: '',
  });
  useEffect(() => {
    const rawUserInfo = parseCookies(null).USER_INFO;
    if (rawUserInfo) {
      setUserInfo(JSON.parse(rawUserInfo));
    }
  }, []);

  return (
    <>
      <MobileLogoArea>
        <Logo size="medium" />
      </MobileLogoArea>
      <HeaderWrapper>
        <HeaderWrapper.Content>
          <HeaderWrapper.LeftSide>
            <Logo size="medium" />
          </HeaderWrapper.LeftSide>
          <HeaderWrapper.RightSide>
            <SearchArea>
              <TextField
                marginBottom="0px"
                value=""
                name="search"
                placeholder="Pesquisar"
                onChange={() => {}}
              />
            </SearchArea>
            <ButtonsArea>
              <ButtonsArea.Add
                id="addPostButton"
                ghost
                onClick={onCreatePostClick}
              >
                <Add size="large" />
              </ButtonsArea.Add>
              <ButtonsArea.Home
                ghost
                onClick={() => {
                  Router.push('/app/profile');
                }}
              >
                <Home size="large" />
              </ButtonsArea.Home>
              <ButtonsArea.Heart>
                <Heart size="large" />
              </ButtonsArea.Heart>
              <ButtonsArea.Profile ghost onClick={onProfileModalClick}>
                <img src={userInfo.photoUrl} width="32" alt="Profile" style={{ borderRadius: '50%' }} />
              </ButtonsArea.Profile>
              <ButtonsArea.Search>
                <Search size="large" />
              </ButtonsArea.Search>
            </ButtonsArea>
          </HeaderWrapper.RightSide>
        </HeaderWrapper.Content>
      </HeaderWrapper>
    </>
  );
}

LoggedHeader.propTypes = {
  onCreatePostClick: PropTypes.func.isRequired,
  onProfileModalClick: PropTypes.func.isRequired,
};
