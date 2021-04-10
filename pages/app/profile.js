import React from 'react';
import PropTypes from 'prop-types';
import authService from '../../src/services/auth/authService';

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);

  const hasActionSession = await auth.hasActiveSession();

  if (hasActionSession) {
    const { user } = auth.getSession();
    return {
      props: {
        user,
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
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};
