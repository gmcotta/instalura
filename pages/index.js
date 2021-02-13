import React from 'react';

import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Button from '../src/components/commons/Button';
import Text from '../src/components/foundation/Text';
import { Grid } from '../src/components/foundation/layout/Grid';

export default function Home() {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Menu />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col offset={{ xs: 0, md: 1}} value={{ xs: 12, md: 5 }}>
            <Text 
              variant="title" 
              tag="h1" 
              color="tertiary.main" 
              textAlign={{
                xs: "center",
                md: "left"
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text 
              variant="paragraph1" 
              tag="p" 
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "left"
              }}
            >
              Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.
            </Text>
            <Button 
              variant="primary.main"
              display="block"
              margin={{
                xs: "auto",
                md: "initial"
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </div>
  );
}
