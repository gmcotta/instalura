import React, { useContext } from 'react';

import Button from '../src/components/commons/Button';
import Text from '../src/components/foundation/Text';
import Grid from '../src/components/foundation/layout/Grid';
import WebsitePageWrapper, { WebsitePageContext } from '../src/components/wrappers/WebsitePage';

function PageContent() {
  const websitePageContext = useContext(WebsitePageContext);
  return (
    <Grid.Container
      marginTop={{
        xs: '32px',
        md: '72px',
      }}
    >
      <Grid.Row>
        <Grid.Col
          offset={{ xs: 0, md: 1 }}
          value={{ xs: 12, md: 5 }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Compartilhe momentos e conecte-se com amigos
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum
            girarzis, nisi eros vermeio. Posuere libero varius. Nullam a nisl
            ut ante blandit hendrerit.
          </Text>
          <Button
            variant="primary.main"
            display="block"
            margin={{
              xs: 'auto',
              md: 'initial',
            }}
            onClick={websitePageContext.openModalCadastrar}
          >
            Cadastrar
          </Button>
        </Grid.Col>
        <Grid.Col value={{ xs: 12, md: 6 }}>
          <img
            alt="Imagem de dois celulares mostrando o perfil do Nicolas Cage"
            style={{ display: 'block', margin: 'auto' }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default function Home() {
  return (
    <WebsitePageWrapper
      pageBoxProps={{
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundImage: 'url(/images/bubbles.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
      }}
      seoProps={{ headTitle: 'Home' }}
      menuProps={{
        showMenu: true,
      }}
    >
      <PageContent />
    </WebsitePageWrapper>
  );
}
