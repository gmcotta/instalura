import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';

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

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    username: '',
    password: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService.login({
        username: values.username,
        password: values.password,
      })
        .then(() => {
          router.push('/app/profile');
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });
  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="username"
        value={form.values.username}
        error={form.errors.username}
        isTouched={form.touched.username}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
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
