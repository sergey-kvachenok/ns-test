// libraries
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
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

const validationSchema = yup.object({
  username: yup.string().required('Please provide a user name. This field is mandatory'),
  password: yup.string().required('Please provide a password. This field is mandatory'),
});

const Login = () => {
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
      <Formik onSubmit={submitForm} initialValues={initialValues} validationSchema={validationSchema}>
        <Form className={classes.formContainer}>
          <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 'bold', mb: theme.spacing(4) }}>
            Login
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
