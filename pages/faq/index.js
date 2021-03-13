import React from 'react';

import FAQScreen from '../../src/components/screens/FAQ';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQPage({ faqCategories }) {
  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (res) => {
      const response = await res.json();
      return response.data;
    });
  return {
    props: {
      faqCategories,
    },
  };
}

FAQPage.propTypes = FAQScreen.propTypes;
