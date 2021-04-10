import React from 'react';
import PropTypes from 'prop-types';
import authService from '../../src/services/auth/authService';
import userService from '../../src/services/user/userService';

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);

  const hasActionSession = await auth.hasActiveSession();

  if (hasActionSession) {
    const { user } = auth.getSession();
    const profilePage = await userService().getProfilePage(ctx);
    return {
      props: {
        user: {
          ...user,
          ...profilePage.user,
        },
        posts: profilePage.posts,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  return ctx.res.end();
}

export default function ProfilePage(props) {
  return (
    <div>
      Página de Profile!
      <pre>{JSON.stringify(props, null, 2)}</pre>
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
