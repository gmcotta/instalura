import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Button from '../../commons/Button';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import loginService from '../../../services/login/loginService';

export default function FormProfile({ modalProps, onClose }) {
  async function logout() {
    await loginService.logout(null);
    Router.push('/');
  }

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
          position="relative"
          {...modalProps}
        >
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
          <Button
            ghost
            variant="secondary.main"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormProfile.propTypes = {
  modalProps: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
};
