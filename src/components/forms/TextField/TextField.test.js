import React from 'react';
import { render, screen } from '../../../infra/test/testUtils';

import TextField from './index';

describe('<TextField />', () => {
  it('should render component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Gustavo"
        onChange={() => {}}
        name="username"
      />,
    );

    screen.debug();
    const textField = screen.getAllByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
  });
});
