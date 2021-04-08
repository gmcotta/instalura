import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

// eslint-disable-next-line import/prefer-default-export
export async function getContent() {
  const query = gql`
    query {
      aboutPage {
        title
        content
      }
    }
  `;

  const client = CMSGraphQLClient();

  const response = await client.query({ query });

  return response.data.messages;
}
