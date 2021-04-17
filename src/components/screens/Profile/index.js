import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfilePhoto = styled.img`
  border-radius: 50%;
  width: 88px;
  ${breakpointsMedia({
    md: css`
      width: 100px;
    `,
    lg: css`
      width: 160px;
    `,
  })}
`;

const ProfileInfo = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 29px;
  ${breakpointsMedia({
    md: css`
      margin-left: 58px;
    `,
    lg: css`
      margin-left: 74px;
    `,
  })}
`;
const ProfileStatus = styled.div`
  display: flex;
  justify-content: space-between;
  
`;
ProfileStatus.Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfileDescription = styled.div`
  display: none;
  margin-top: 32px;

  ${breakpointsMedia({
    md: css`
      display: flex;
      flex-direction: column;
    `,
  })}
`;

ProfileDescription.Mobile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  ${breakpointsMedia({
    md: css`
      display: none;
    `,
  })}
`;

export default function ProfileScreen({ user, posts }) {
  const firstPost = posts[0];
  console.log(posts);
  return (
    <Grid.Container
      marginTop={{
        xs: '32px',
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
                  <Text tag="span" variant="titleXS">{posts.length}</Text>
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
    </Grid.Container>
  );
}
