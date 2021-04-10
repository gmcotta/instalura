import React from 'react';
import PropTypes from 'prop-types';

export async function getServerSideProps(ctx) {
  const hasActionSession = false;

  if (hasActionSession) {
    return {
      props: {
        user: {
          name: 'Gustavo',
        },
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  return ctx.res.end();
}

export default function ProfilePage({ user }) {
  return (
    <div>
      Página de Profile!
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <img
        src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
        alt="Nicolas Cage"
      />
    </div>
  );
}

ProfilePage.propTypes = {
  user: PropTypes.string.isRequired,
};
