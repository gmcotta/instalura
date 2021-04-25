import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import filter from '../../../theme/filter';

const StepOne = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StepTwo = styled.div`
  padding: 24px 24px 0 24px;
  max-width: 100%;
`;

const StepThree = styled.div`
  padding: 56px 24px 24px 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory; 
  margin-bottom: 16px;
  height: 150px;

  & > button {
    margin-right: 8px;
  } 

  & > button:last-child {
    margin: 0;
  }
`;

function FormContent({ onClose }) {
  const filterArray = Object.keys(filter).map((key) => filter[key]);
  const [formStep, setFormStep] = useState(0);
  const [postInfo, setPostInfo] = useState({
    photoUrl: '',
    filter: 'none',
    description: '',
  });

  function handleChange(event) {
    return setPostInfo({
      ...postInfo,
      [event.target.name]: event.target.value,
    });
  }

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <form style={{ width: '375px', height: '100%' }}>
      <Text
        position="absolute"
        top="16px"
        left="32px"
        variant="titleXS"
      >
        Novo Post
      </Text>
      <Button
        type="button"
        ghost
        position="absolute"
        top="16px"
        right="32px"
        padding="0"
        fontSize="0"
        onClick={onClose}
      >
        <img src="/images/close.svg" alt="Fechar Modal" />
      </Button>
      {
        formStep < 2 && (
          <Box
            width="375px"
            height="375px"
            backgroundColorTheme="background.secondary"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="56px"
          >
            <img className={postInfo.filter} src={(formStep === 1 && postInfo.photoUrl) || '/images/image.png'} width="100%" alt="Imagem prévia" />
          </Box>
        )
      }
      {formStep === 0 && (
        <StepOne>
          <TextField
            placeholder="URL da imagem"
            name="photoUrl"
            value={postInfo.photoUrl}
            onChange={handleChange}
            marginTop="56px"
            marginBottom="8px"
          />
          <Text
            variant="paragraph2"
            tag="p"
            color="tertiary.light"
            marginBottom="32px"
          >
            Formatos suportados: jpg, png, svg e xpto.
          </Text>
          <Button
            type="button"
            disabled={!postInfo.photoUrl}
            variant="primary.main"
            fullWidth
            onClick={() => setFormStep(1)}
          >
            Avançar
          </Button>
        </StepOne>
      )}
      {formStep === 1 && (
        <StepTwo>
          <Slider>
            {filterArray.map((item) => (
              <Button
                ghost
                padding="0"
                key={item.name}
                type="button"
                display="flex"
                flexDirection="column"
                alignItems="center"
                onClick={() => setPostInfo({
                  ...postInfo,
                  filter: item.class,
                })}
              >
                <img className={item.class} src={postInfo.photoUrl} width="88px" height="88px" alt={`${item.name}`} />
                <Text
                  variant="smallestException"
                  color="tertiary.light"
                  marginTop="12px"
                >
                  {item.name}
                </Text>
              </Button>
            ))}
          </Slider>
          <Button
            type="button"
            disabled={!postInfo.photoUrl}
            variant="primary.main"
            fullWidth
            onClick={() => setFormStep(2)}
          >
            Avançar
          </Button>
        </StepTwo>
      )}
      {formStep === 2 && (
        <StepThree>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <img className={postInfo.filter} src={postInfo.photoUrl} width="88px" alt="Imagem prévia" />

            <TextField
              placeholder="Descrição"
              name="description"
              value={postInfo.description}
              onChange={handleChange}
              marginTop="16px"
              width="100%"
            />
          </div>
          <Button
            type="button"
            disabled={!postInfo.description}
            variant="primary.main"
            fullWidth
            onClick={() => submitForm}
          >
            Postar
          </Button>
        </StepThree>
      )}
    </form>
  );
}
export default function FormCreatePost({ modalProps, onClose }) {
  return (
    <Grid.Row style={{
      position: 'relative',
    }}
    >
      <Grid.Col
        values={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          backgroundColor="white"
          width={{
            xs: '100vw',
            md: '375px',
          }}
          height={{
            xs: '100vh',
            md: '667px',
          }}
          borderRadius={{
            xs: '0',
            md: '8px',
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          {...modalProps}
        >
          <FormContent onClose={onClose} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

FormCreatePost.propTypes = {
  modalProps: PropTypes.objectOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};
