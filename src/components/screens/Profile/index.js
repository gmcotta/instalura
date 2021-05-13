import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import PropTypes from 'prop-types';

import HttpClient from '../../../services/http/httpService';
import { BASE_URL } from '../../../services/login/loginService';

import Button from '../../commons/Button';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import {
  PhotoGrid,
  PhotoItem,
  ProfileDescription,
  ProfileInfo,
  ProfilePhoto,
  ProfileSection,
  ProfileStatus,
} from './styles';
import LikeButton from './components/LikeButton';

export default function ProfileScreen({ user, posts: originalPosts }) {
  const token = parseCookies().LOGIN_COOKIE_APP_TOKEN;
  const [posts, setPosts] = useState(originalPosts);
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

  function checkUserLikePost(loggedUser, post) {
    const postWithoutLikeIndex = post.likes.findIndex(
      (like) => like.user === loggedUser.id,
    );
    // return postWithoutLikeIndex !== -1 ? 1 : -1;
    return postWithoutLikeIndex !== -1;
  }

  function updatePostList(oldPosts, newPost) {
    const postIndex = oldPosts.findIndex(
      (oldPost) => oldPost._id === newPost._id,
    );
    const newPosts = [...posts];
    newPosts[postIndex] = newPost;
    setPosts(newPosts);
  }

  async function handleLikeClick(post) {
    const url = `${BASE_URL}/api/posts/${post._id}/like`;
    await HttpClient(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(({ data }) => {
      if (data) {
        updatePostList(posts, data);
      } else {
        const postWithoutLikeIndex = post.likes.findIndex(
          (like) => like.user === user._id,
        );
        post.likes.splice(postWithoutLikeIndex, 1);
        updatePostList(posts, post);
      }
    });
  }

  return (
    <Grid.Container
      marginTop={{
        md: '72px',
      }}
    >
      <Grid.Row>
        <Grid.Col
          value={{ xs: 12, md: 8, lg: 6 }}
          offset={{ xs: 0, md: 2, lg: 3 }}
        >
          <ProfileSection>
            <ProfilePhoto
              src={userInfo.photoUrl}
              alt="Profile"
            />
            <ProfileInfo>
              <ProfileStatus>
                <ProfileStatus.Info>
                  <Text id="publicationNumber" tag="span" variant="titleXS">{posts.length}</Text>
                  <Text tag="span" variant="paragraph1" color="tertiary.light">Publicações</Text>
                </ProfileStatus.Info>
              </ProfileStatus>
              <ProfileDescription>
                <Text tag="span" variant="titleXS">{userInfo.name}</Text>
                <Text tag="span" variant="paragraph1" color="tertiary.light">{userInfo.description}</Text>
              </ProfileDescription>
            </ProfileInfo>
          </ProfileSection>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col>
          <ProfileDescription.Mobile>
            <Text tag="span" variant="titleXS">{userInfo.name}</Text>
            <Text tag="span" variant="paragraph1" color="tertiary.light">{userInfo.description}</Text>
          </ProfileDescription.Mobile>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col
          value={{ xs: 12, md: 10, lg: 8 }}
          offset={{ xs: 0, md: 1, lg: 2 }}
          marginTop="72px"
          marginBottom="72px"
        >
          <PhotoGrid>
            {posts.map((post) => (
              <PhotoItem
                key={post._id}
              >
                <PhotoItem.PhotoSection
                  className={post.filter}
                  src={post.photoUrl}
                  alt={post.description}
                />
                <PhotoItem.LikeSectionWrapper>
                  <PhotoItem.LikeSection>
                    <LikeButton
                      onClick={() => handleLikeClick(post)}
                      isLikeActive={checkUserLikePost(user, post)}
                      likeQuantity={post.likes.length}
                    />
                    <Button
                      variant="primary.main"
                      marginTop={{
                        xs: '8px',
                        md: '16px',
                      }}
                      onClick={() => Router.push(`/app/posts/${post._id}`)}
                    >
                      Ver post
                    </Button>
                  </PhotoItem.LikeSection>
                </PhotoItem.LikeSectionWrapper>
              </PhotoItem>
            ))}
          </PhotoGrid>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

ProfileScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};
