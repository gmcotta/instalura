import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import TextField from '../../forms/TextField';
import Button from '../../commons/Button';
import loginService from '../../../services/login/loginService';
import useForm from '../../../infra/hooks/forms/useForm';

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
        .then(() => {
          router.push('/app/profile');
        })
        .catch(() => {
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
  );
}

LoginForm.defaultProps = {
  onSubmit: undefined,
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
