import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { parseCookies } from 'nookies';

import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import LikeButton from './components/LikeButton';
import { BASE_URL } from '../../../services/login/loginService';
import HttpClient from '../../../services/http/httpService';

const Card = styled.section`
  background-color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  border-radius: 8px;
`;

Card.Header = styled.header`
  display: flex;
  align-items: center;
  ${breakpointsMedia({
    xs: css`
      padding: 16px 28px;
    `,
    md: css`
      padding: 26px 44px;
    `,
  })}
  
`;

Card.Footer = styled.footer`
  ${breakpointsMedia({
    xs: css`
      padding: 16px 28px;
    `,
    md: css`
      padding: 26px 44px;
    `,
  })}
`;

Card.Row = styled.div`
  display: flex;
  align-items: center;
  ${propToStyle('marginTop')};
  
`;

export default function PostScreen({ posts }) {
  const token = parseCookies().LOGIN_COOKIE_APP_TOKEN;
  const router = useRouter();
  const { _id } = router.query;
  const [selectedPost, setSelectedPost] = useState({ likes: [] });
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

  useEffect(() => {
    setSelectedPost(posts.find((post) => post._id === _id));
  }, []);

  async function handleLikeClick(post) {
    const url = `${BASE_URL}/api/posts/${post._id}/like`;
    await HttpClient(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(({ data }) => {
      if (data) {
        setSelectedPost((oldPost) => ({
          ...oldPost,
          ...data,
        }));
      } else {
        const postWithoutLikeIndex = post.likes.findIndex(
          (like) => like.user === _id,
        );
        post.likes.splice(postWithoutLikeIndex, 1);
        setSelectedPost((oldPost) => ({
          ...oldPost,
          ...post,
        }));
      }
    });
  }

  function checkUserLikePost(loggedUser, post) {
    if (post.likes) {
      const postWithoutLikeIndex = post.likes.findIndex(
        (like) => like.user === loggedUser,
      );
      // return postWithoutLikeIndex !== -1 ? 1 : -1;
      return postWithoutLikeIndex !== -1;
    }
    return false;
  }

  return (
    <>
      <Grid.Container
        marginTop={{
          md: '72px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
            offset={{ xs: 0, md: 1 }}
          >
            <Card color="background.light">
              <Card.Header>
                <img
                  src={userInfo.photoUrl}
                  style={{ borderRadius: '50%', width: '50px' }}
                  alt="Profile"
                />
                <Text
                  variant="paragraph1"
                  marginLeft="8px"
                >
                  {userInfo.username}
                </Text>
              </Card.Header>
              <img
                className={selectedPost.filter}
                src={selectedPost.photoUrl}
                alt={selectedPost.description}
                width="100%"
              />
              <Card.Footer>
                <Card.Row>
                  <LikeButton
                    onClick={() => handleLikeClick(selectedPost)}
                    isLikeActive={checkUserLikePost(selectedPost.user, selectedPost)}
                    likeQuantity={selectedPost.likes.length}
                  />
                </Card.Row>
                <Card.Row marginTop="16px">
                  <span>{selectedPost.description}</span>
                </Card.Row>

              </Card.Footer>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </>
  );
}

PostScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};
