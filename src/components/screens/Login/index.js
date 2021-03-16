import React from 'react';
import Grid from '../../foundation/layout/Grid';

export default function LoginScreen() {
  return (
    <Grid.Container style={{ flex: 1 }}>
      <div>
        Login
        <a href="/">Voltar para home recarregando a página</a>
      </div>
    </Grid.Container>
  );
}
