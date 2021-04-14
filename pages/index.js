import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import HomeScreen from '../src/components/screens/Home';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    pageBoxProps: {
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
    seoProps: { headTitle: 'Home' },
    menuProps: {
      showMenu: true,
      showLoggedMenu: true,
    },
  },
});
