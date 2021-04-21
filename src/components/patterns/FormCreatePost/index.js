import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Button from '../../commons/Button';

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
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={{
            xs: '0',
            md: '8px',
          }}
          {...modalProps}
        >
          <Button
            ghost
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '32px',
              padding: '0',
              fontSize: '0',
            }}
          >
            <img src="/images/close.svg" alt="Fechar Modal" />
          </Button>
          <span>Oi</span>
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormCreatePost.propTypes = {
  modalProps: PropTypes.objectOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};
