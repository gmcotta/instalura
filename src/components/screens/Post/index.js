import React from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import { parseCookies } from 'nookies';
import Grid from '../../foundation/layout/Grid';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Heart from '../../../theme/icons/heart';

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
  const userInfo = JSON.parse(parseCookies(null).USER_INFO);
  const { _id } = router.query;
  const selectedPost = posts.find((post) => post._id === _id);
  console.log(_id, selectedPost);
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
                <span>{userInfo.username}</span>
              </Card.Header>
              <img
                className={selectedPost.filter}
                src={selectedPost.photoUrl}
                alt={selectedPost.description}
                width="100%"
              />
              <Card.Footer>
                <Heart size="large" />
                <span>{selectedPost.likes.length}</span>
                <span>{selectedPost.description}</span>
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
