import React, { useState } from 'react';

import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Button from '../src/components/commons/Button';
import Modal from '../src/components/commons/Modal';
import Text from '../src/components/foundation/Text';
import Box from '../src/components/foundation/layout/Box';
import Grid from '../src/components/foundation/layout/Grid';
import FormCadastro from '../src/components/patterns/FormCadastro';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {(modalProps) => (
          <FormCadastro modalProps={modalProps} onClose={closeModal} />
        )}
      </Modal>
      <Menu onCadastrarClick={openModal} />

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
              onClick={openModal}
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
      <Footer />
    </Box>
  );
}
