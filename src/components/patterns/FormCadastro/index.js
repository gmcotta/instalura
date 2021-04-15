import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';

import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';

import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent({ onClose }) {
  const [userInfo, setUserInfo] = useState({
    nome: '',
    usuario: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const isFormInvalid = !userInfo.nome.length || !userInfo.usuario.length;

  function handleChange(event) {
    return setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsFormSubmitted(true);
    setSubmissionStatus(formStates.LOADING);

    const userDTO = {
      name: userInfo.nome,
      username: userInfo.usuario,
    };

    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.json();
        }
        setSubmissionStatus(formStates.ERROR);
        throw new Error('Erro inesperado');
      })
      .then(() => {
        setSubmissionStatus(formStates.DONE);
      })
      .catch(() => {
        setSubmissionStatus(formStates.ERROR);
      })
      .finally(() => {
        setTimeout(() => {
          onClose();
          setSubmissionStatus(formStates.DEFAULT);
          setIsFormSubmitted(false);
          setUserInfo({
            ...userInfo,
            nome: '',
            usuario: '',
          });
        }, 3000);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {!isFormSubmitted && (
        <>
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
          >
            Pronto para saber da vida dos outros?
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            marginBottom="32px"
          >
            Você está a um passo de saber tudoo que está rolando no bairro,
            complete seu cadastro agora!
          </Text>
          <div>
            <TextField
              placeholder="Nome"
              name="nome"
              value={userInfo.nome}
              onChange={handleChange}
              marginBottom="17px"
            />
          </div>
          <div>
            <TextField
              placeholder="Usuário"
              name="usuario"
              value={userInfo.usuario}
              onChange={handleChange}
              marginBottom="17px"
            />
          </div>
          <Button
            type="submit"
            disabled={isFormInvalid}
            variant="primary.main"
            fullWidth
          >
            Cadastrar
          </Button>
        </>
      )}

      {isFormSubmitted && submissionStatus === formStates.LOADING && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: loadingAnimation,
              loop: false,
              autoplay: true,
            }}
          />
        </Box>
      )}
      {isFormSubmitted && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
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
        </Box>
      )}

      {isFormSubmitted && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
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
        </Box>
      )}
    </form>
  );
}

export default function FormCadastro({ modalProps, onClose }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0px' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
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

FormCadastro.propTypes = {
  modalProps: PropTypes.objectOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};
