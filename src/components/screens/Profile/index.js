import React, { useState } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import { Lottie } from '@crello/react-lottie';

import HttpClient from '../../../services/http/httpService';
import { BASE_URL } from '../../../services/login/loginService';

import Logo from '../../../theme/Logo';
import Button from '../../commons/Button';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import Heart from '../../../theme/icons/heart';
import {
  MobileLogoArea,
  PhotoGrid,
  PhotoItem,
  ProfileDescription,
  ProfileInfo,
  ProfilePhoto,
  ProfileSection,
  ProfileStatus,
} from './styles';

import likeAnimation from './animations/like.json';

export default function ProfileScreen({ user, posts: originalPosts }) {
  const [posts, setPosts] = useState(originalPosts);
  const token = parseCookies().LOGIN_COOKIE_APP_TOKEN;
  let firstPost = posts[0];

  if (!firstPost) {
    firstPost = {
      photoUrl: '',
      description: '',
    };
  }

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
    <>
      <MobileLogoArea>
        <Logo size="medium" />
      </MobileLogoArea>
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
                src={firstPost.photoUrl}
                alt={firstPost.description}
              />
              <ProfileInfo>
                <ProfileStatus>
                  <ProfileStatus.Info>
                    <Text id="publicationNumber" tag="span" variant="titleXS">{posts.length}</Text>
                    <Text tag="span" variant="paragraph1" color="tertiary.light">Publicações</Text>
                  </ProfileStatus.Info>
                </ProfileStatus>
                <ProfileDescription>
                  <Text tag="span" variant="titleXS">Mario Souto</Text>
                  <Text tag="span" variant="paragraph1" color="tertiary.light">Uma descrição do Mario Souto</Text>
                </ProfileDescription>
              </ProfileInfo>
            </ProfileSection>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <ProfileDescription.Mobile>
              <Text tag="span" variant="titleXS">Mario Souto</Text>
              <Text tag="span" variant="paragraph1" color="tertiary.light">Uma descrição do Mario Souto</Text>
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
                      <Button
                        ghost
                        fontSize="0"
                        padding="0"
                        onClick={() => handleLikeClick(post)}
                      >
                        <Heart isActive={checkUserLikePost(user, post)} />
                        {/* <Lottie
                          height="48px"
                          width="48px"
                          config={{
                            animationData: likeAnimation,
                            loop: false,
                            autoplay: false,
                            rendererSettings: {
                              preserveAspectRatio: 'xMidYMid slice',
                            },
                          }}
                          playingState="stopped"
                          direction={checkUserLikePost(user, post)}
                        /> */}
                      </Button>
                      <span>
                        {post.likes.length}
                      </span>
                      <Button
                        variant="primary.main"
                        marginTop="16px"
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
    </>
  );
}
