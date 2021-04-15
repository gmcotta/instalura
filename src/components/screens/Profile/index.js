import React from 'react';
import Grid from '../../foundation/layout/Grid';

export default function ProfileScreen({ posts }) {
  return (
    <Grid.Container
      marginTop={{
        xs: '32px',
        md: '72px',
      }}
    >
      <Grid.Row>
        {/* <Grid.Col
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          justifyItems="center"
          gap={{
            xs: '4px',
            md: '32px',
          }}
        >
          {posts.map((post) => (
            <img
              key={post._id}
              src={post.photoUrl}
              alt={post.description}
            />
          ))}
        </Grid.Col> */}
      </Grid.Row>
    </Grid.Container>
  );
}
