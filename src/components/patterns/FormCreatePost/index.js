import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import filter from '../../../theme/filter';

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

  return (
    <form style={{ width: '100%' }}>
      <Button
        type="button"
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
      {
        formStep < 2 && (
          <Box
            style={{
              width: '375px',
              height: '375px',
              backgroundColor: '#D4D4D4',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '56px',
            }}
          >
            <img className={postInfo.filter} src={(formStep === 1 && postInfo.photoUrl) || '/images/image.png'} width="100%" alt="Imagem prévia" />
          </Box>
        )
      }
      {formStep === 0 && (
        <div style={{ padding: '0 24px' }}>
          <TextField
            placeholder="URL da imagem"
            name="photoUrl"
            value={postInfo.photoUrl}
            onChange={handleChange}
            marginTop="48px"
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
        </div>
      )}
      {formStep === 1 && (
        <div style={{ padding: '24px 24px 0 24px', maxWidth: '100%' }}>
          <div style={{ display: 'flex', overflowX: 'auto' }}>
            {filterArray.map((item) => (
              <Button
                ghost
                padding="0"
                key={item.name}
                type="button"
                style={{ display: 'flex', flexDirection: 'column' }}
                onClick={() => setPostInfo({
                  ...postInfo,
                  filter: item.class,
                })}
              >
                <img className={item.class} src={postInfo.photoUrl} width="88px" height="88px" alt={`${item.name}`} />
                <span>{item.name}</span>
              </Button>
            ))}
          </div>
          <Button
            type="button"
            disabled={!postInfo.photoUrl}
            variant="primary.main"
            fullWidth
            onClick={() => setFormStep(2)}
          >
            Avançar
          </Button>
        </div>
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
