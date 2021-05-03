import React from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import Grid from '../../foundation/layout/Grid';
import Logo from '../../../theme/Logo';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Heart from '../../../theme/icons/heart';

const MobileLogoArea = styled.section`
  width: 100%;
  margin-bottom: 16px;
  padding: 12px;
  background-color: #fff;
  display: flex;
  justify-content: center;

  ${breakpointsMedia({
    md: css`
      display: none;
    `,
  })}
`;

const Card = styled.section`
  background-color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

Card.Header = styled.header`
  ${breakpointsMedia({
    xs: css`
      padding: 16px 28px;
    `,
    md: css`
      padding: 26px 44px;
    `,
  })}
  
`;

Card.Content = styled.div``;

Card.Footer = styled.footer`
  padding: 26px 44px;
`;

export default function PostScreen({ posts }) {
  const router = useRouter();
  const { _id } = router.query;
  const selectedPost = posts.find((post) => post._id === _id);
  console.log(_id, selectedPost);
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
            value={{ xs: 12, md: 6 }}
            offset={{ xs: 0, md: 1 }}
          >
            <Card color="background.light">
              <Card.Header>
                <img src={selectedPost.photoUrl} style={{ borderRadius: '50%', width: '50px' }} />
                <span>nic.cage</span>
              </Card.Header>
              <img className={selectedPost.filter} src={selectedPost.photoUrl} alt={selectedPost.description} width="100%" />
              <Card.Footer>
                <Heart size="large" />
                <span>{selectedPost.likes.length}</span>
              </Card.Footer>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </>
  );
}
