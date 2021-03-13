import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const defaultPageTitle = 'Instalura - Projeto do Alura Bootcamp';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle ? `${headTitle} | ${defaultPageTitle}` : defaultPageTitle;

  const defaultDescription = 'Projeto das aulas do Alura Bootcamp JAMStack';
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={defaultDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://instalura-gmcotta-gmcotta.vercel.app/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content="https://bootcamp-jamstack-alura.s3.amazonaws.com/instalura-home.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://instalura-gmcotta-gmcotta.vercel.app/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={defaultDescription} />
      <meta property="twitter:image" content="https://bootcamp-jamstack-alura.s3.amazonaws.com/instalura-home.png" />

    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
