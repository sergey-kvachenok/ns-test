// libraries
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
// components
import BaseFields from './BaseFields';
// constants
import { LoginBodyType } from '../../types/login.types';
import { routes } from '../../constants/routes';
// styles
import useStyles, { errorStyles } from './Login.styles';
import { theme } from '../../App';
// api
import { createApiLoginClient } from '../../api/login';
import { useAppDispatch } from '../../hooks/redux';
import { setToken } from '../../store/slices/authSlice';

const api = createApiLoginClient();

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = (t: Function) =>
  yup.object({
    username: yup.string().required(t('validation.incorrect-username')),
    password: yup.string().required(t('validation.incorrect-password')),
  });

const Login = () => {
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');

  const submitForm = async (values: LoginBodyType) => {
    try {
      setError('');
      const response = await api.login(values);
      const { token } = response || {};

      dispatch(setToken(token));
      navigate(routes.dashboard, { replace: true });
    } catch (error: any) {
      setError(error?.message);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Formik onSubmit={submitForm} initialValues={initialValues} validationSchema={() => validationSchema(t)}>
        <Form className={classes.formContainer}>
          <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 'bold', mb: theme.spacing(4) }}>
            {t('login')}
          </Typography>

          <BaseFields />

          <Typography sx={{ ...errorStyles, mt: theme.spacing(2), visibility: error ? 'visible' : 'hidden' }}>
            {error}
          </Typography>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
