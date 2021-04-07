import React from 'react';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

function AboutScreen() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
    >
      <Grid.Container>
        <Grid.Row
          marginTop={{ xs: '32px', md: '120px' }}
          flex="1"
        >
          <Grid.Col
            value={{ xs: 12, md: 6, lg: 6 }}
            offset={{ md: 2 }}
            flex={1}
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
            >
              Sobre
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6, lg: 6 }}
            offset={{ md: 2 }}
            flex={1}
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
            >
              Texto
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

export default AboutScreen;
