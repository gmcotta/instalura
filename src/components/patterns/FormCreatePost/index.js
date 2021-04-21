import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';

export default function FormCreatePost({ modalProps }) {
  return (
    <Grid.Row style={{
      position: 'relative',
      top: '25vh',
      left: '50vw',
    }}
    >
      <Grid.Col
        values={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          backgroundColor="white"
          width="375px"
          height="667px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          {...modalProps}
        >
          <span>Oi</span>
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormCreatePost.propTypes = {
  modalProps: PropTypes.objectOf(PropTypes.object).isRequired,
};
