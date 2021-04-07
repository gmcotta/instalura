import { GraphQLClient, gql } from 'graphql-request';

import AboutScreen from '../src/components/screens/About';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const DatoCMSURL = 'https://graphql.datocms.com/';
  const TOKEN = process.env.DATOCMS_TOKEN;

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const query = gql`
    query {
      aboutPage {
        title
        content
      }
    }
  `;

  const messages = await client.request(query);

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
