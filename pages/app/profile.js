import React from 'react';
import ProfileScreen from '../../src/components/screens/Profile';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

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

export default websitePageHOC(ProfileScreen, {
  pageWrapperProps: {
    pageBoxProps: {
      flexWrap: 'wrap',
    },
    seoProps: { headTitle: 'Perfil' },
    menuProps: {
      showMenu: false,
      showLoggedMenu: true,
    },
    footerProps: {
      showFooter: false,
    },
  },
});
