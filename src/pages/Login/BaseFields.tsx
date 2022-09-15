// libraries
import { Box, Button, Typography, TextField } from '@mui/material';
import { useFormikContext, FormikValues } from 'formik';
// styles
import { errorStyles, textFieldWrapper } from './Login.styles';

const BaseFields = () => {
  const { handleChange, submitForm, errors, touched } = useFormikContext<FormikValues>();

  return (
    <>
      <Box sx={textFieldWrapper}>
        <Typography align="left">Username</Typography>

        <TextField
          name="username"
          onChange={handleChange}
          sx={{ width: 'inherit' }}
          placeholder="Your username"
          data-testid="username"
          required
        />

        <Typography sx={{ ...errorStyles, visibility: touched.username && errors.username ? 'visible' : 'hidden' }}>
          {(errors.username as string) || ''}
        </Typography>
      </Box>

      <Box sx={textFieldWrapper}>
        <Typography align="left">Password</Typography>

        <TextField
          name="password"
          onChange={handleChange}
          sx={{ width: 'inherit' }}
          placeholder="Your password"
          required
          type="password"
          data-testid="password"
        />

        <Typography sx={{ ...errorStyles, visibility: touched.password && errors.password ? 'visible' : 'hidden' }}>
          {(errors?.password as string) || ''}
        </Typography>
      </Box>

      <Button sx={{ width: '100%' }} variant="contained" onClick={submitForm} data-testid="submit-login-button">
        Login
      </Button>
    </>
  );
};

export default BaseFields;
