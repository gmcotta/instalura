import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import { Lottie } from '@crello/react-lottie';

import HttpClient from '../../../services/http/httpService';
import { BASE_URL } from '../../../services/login/loginService';
import filter from '../../../theme/filter';

import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';

import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import Slider from '../../commons/Slider';

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

const StepFour = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

function FormContent({ onClose }) {
  const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const filterArray = Object.keys(filter).map((key) => filter[key]);
  const [formStep, setFormStep] = useState(0);
  const initialValues = {
    photoUrl: '',
    filter: 'none',
    description: '',
  };
  const [postInfo, setPostInfo] = useState(initialValues);

  function handleChange(event) {
    return setPostInfo({
      ...postInfo,
      [event.target.name]: event.target.value,
    });
  }

  async function submitForm(event) {
    event.preventDefault();
    const token = parseCookies().LOGIN_COOKIE_APP_TOKEN;
    const url = `${BASE_URL}/api/posts`;

    await HttpClient(url, {
      method: 'POST',
      body: postInfo,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      setSubmissionStatus(formStates.DONE);
    }).catch(() => {
      setSubmissionStatus(formStates.ERROR);
    }).finally(() => {
      setFormStep(3);
      setTimeout(() => {
        setPostInfo((oldValues) => ({
          ...oldValues,
          ...initialValues,
        }));
        setFormStep(0);
        onClose();

        const { pathname } = Router.router;
        if (pathname === '/app/profile') {
          Router.reload();
        } else {
          Router.push('/app/profile');
        }
      }, 3000);
    });
  }

  return (
    <form id="createPostForm" style={{ width: '375px', height: '100%' }}>
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
            marginTop="16px"
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
            id="buttonGoToStep2"
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
                id={`button-${item.class}`}
                height=""
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
                <img className={item.class} src={postInfo.photoUrl} width="64px" height="64px" alt={`${item.name}`} />
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
            id="buttonGoToStep3"
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
            id="buttonCreatePost"
            type="submit"
            disabled={!postInfo.description}
            variant="primary.main"
            fullWidth
            onClick={submitForm}
          >
            Postar
          </Button>
        </StepThree>
      )}
      {formStep === 3 && submissionStatus === formStates.DONE && (
        <StepFour>
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: successAnimation,
              loop: false,
              autoplay: true,
            }}
          />
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign="center"
          >
            Cadastro concluído!
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            marginBottom="32px"
            textAlign="center"
          >
            Você já pode começar a saber da vida dos outros.
          </Text>
        </StepFour>
      )}
      {formStep === 3 && submissionStatus === formStates.ERROR && (
        <StepFour>
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: errorAnimation,
              loop: false,
              autoplay: true,
            }}
          />
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign="center"
          >
            Ops, algo inesperado aconteceu!
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            marginBottom="32px"
            textAlign="center"
          >
            Tente novamente mais tarde.
          </Text>
        </StepFour>
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
  modalProps: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
};
