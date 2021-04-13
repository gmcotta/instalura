import React from 'react';
import user from '@testing-library/user-event';

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

    const textField = screen.getAllByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      it('should update the value', () => {
        const onChangeMock = jest.fn();

        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="username"
            isTouched
          />,
        );

        const nameInput = screen.getByPlaceholderText(/nome/i);
        user.type(nameInput, 'Gustavo');
        expect(onChangeMock).toHaveBeenCalledTimes(7);
      });
    });
  });
  describe('when field is invalid', () => {
    it('should display the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value=""
          onChange={() => {}}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />,
      );

      // screen.debug();
      const emailInput = screen.getByPlaceholderText(/email/i);
      const inputErrorMsg = screen.getByRole('alert');

      expect(inputErrorMsg.textContent).toBe('O campo email é obrigatório');
      expect(emailInput).toMatchSnapshot();
    });
  });
});
