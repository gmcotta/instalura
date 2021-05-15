import userService from '../../../src/services/user/userService';
import websitePageHOC from '../../../src/components/wrappers/WebsitePage/hoc';

import PostScreen from '../../../src/components/screens/Post';

export default websitePageHOC(PostScreen, {
  pageWrapperProps: {
    pageBoxProps: {
      flexWrap: 'wrap',
      backgroundColorTheme: 'background.main',
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

export async function getServerSideProps(ctx) {
  const profilePage = await userService().getProfilePage(ctx);

  return {
    props: {
      posts: profilePage.posts,
    },
  };
}
