import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { setCookie } from 'nookies';

import TextField from '../../forms/TextField';
import Button from '../../commons/Button';
import loginService from '../../../services/login/loginService';
import useForm from '../../../infra/hooks/forms/useForm';
import Text from '../../foundation/Text';

const loginSchema = yup.object().shape({
  username: yup.string()
    .required('"Usuário" é obrigatório')
    .min(3, 'Preencha pelo menos 3 caracteres'),
  password: yup.string()
    .required('"Senha" é obrigatória')
    .min(8, 'Preencha pelo menos 8 caracteres'),
});

export default function LoginForm({ onSubmit }) {
  const router = useRouter();
  const [hasError, setHasError] = useState(false);
  const initialValues = {
    username: '',
    password: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      loginService.login({
        username: values.username,
        password: values.password,
      })
        .then((data) => {
          setHasError(false);
          const DAY_IN_SECONDS = 86400;
          setCookie(
            null,
            'USER_INFO',
            JSON.stringify({
              name: data.user.name,
              username: data.user.username,
            }),
            {
              path: '/',
              maxAge: DAY_IN_SECONDS * 7,
            },
          );
          router.push('/app/profile');
        })
        .catch(() => {
          setHasError(true);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });
  return (
    <>
      {hasError && (
        <Text
          color="error.main"
          role="alert"
          marginBottom="16px"
        >
          Usuário ou senha incorreta
        </Text>

      )}
      <form id="formLogin" onSubmit={onSubmit || form.handleSubmit}>
        <TextField
          placeholder="Usuário"
          name="username"
          value={form.values.username}
          error={form.errors.username}
          isTouched={form.touched.username}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          marginBottom="17px"
        />
        <TextField
          placeholder="Senha"
          name="password"
          type="password"
          value={form.values.password}
          error={form.errors.password}
          isTouched={form.touched.password}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          marginBottom="17px"
        />

        <Button
          type="submit"
          variant="primary.main"
          margin={{
            xs: '0 auto',
            md: 'initial',
          }}
          fullWidth
          disabled={form.isFormDisabled}
        >
          Entrar
        </Button>
      </form>
    </>
  );
}

LoginForm.defaultProps = {
  onSubmit: undefined,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
