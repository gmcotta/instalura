import React from 'react';
import user from '@testing-library/user-event';
import {
  render, act, screen, waitFor,
} from '../../../infra/test/testUtils';

import FormLogin from './index';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<FormLogin />', () => {
  describe('when form fields are not filled', () => {
    it('should not submit form', async () => {
      await act(async () => render(
        <FormLogin onSubmit={onSubmit} />,
      ));

      await waitFor(() => expect(screen.getByRole('button')).toBeDisabled());
    });
  });

  describe('when form fields are valid', () => {
    it('should complete the submission', async () => {
      await act(async () => render(
        <FormLogin onSubmit={onSubmit} />,
      ));

      const userInput = screen.getByPlaceholderText(/usu[AaÁá]rio/i);
      user.type(userInput, 'username');
      await waitFor(() => expect(userInput).toHaveValue('username'));

      const passwordInput = screen.getByPlaceholderText(/senha/i);
      user.type(passwordInput, 'password');
      await waitFor(() => expect(passwordInput).toHaveValue('password'));

      const submitButton = screen.getByRole('button');
      expect(submitButton).not.toBeDisabled();

      user.click(submitButton);
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    describe('username field', () => {
      it('should display the respective errors', async () => {
        await act(async () => render(
          <FormLogin onSubmit={onSubmit} />,
        ));

        const userInput = screen.getByPlaceholderText(/usu[AaÁá]rio/i);
        userInput.focus();
        userInput.blur();

        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert').textContent)
          .toBe('Preencha pelo menos 3 caracteres');
      });
    });

    describe('password field', () => {
      it('should display the respective errors', async () => {
        await act(async () => render(
          <FormLogin onSubmit={onSubmit} />,
        ));

        const userInput = screen.getByPlaceholderText(/senha/i);
        userInput.focus();
        userInput.blur();

        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert').textContent)
          .toBe('Preencha pelo menos 8 caracteres');
      });
    });
  });
});
