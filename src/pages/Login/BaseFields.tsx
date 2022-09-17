// libraries
import { Box, Button, Typography, TextField } from '@mui/material';
import { useFormikContext, FormikValues } from 'formik';
import { useTranslation } from 'react-i18next';
// styles
import { errorStyles, textFieldWrapper } from './Login.styles';

const BaseFields = () => {
  const { t } = useTranslation(['common']);
  const { handleChange, submitForm, errors, touched } = useFormikContext<FormikValues>();

  return (
    <>
      <Box sx={textFieldWrapper}>
        <Typography align="left">{t('username')}</Typography>

        <TextField
          name="username"
          onChange={handleChange}
          sx={{ width: 'inherit' }}
          placeholder={t('username-placeholder')}
          data-testid="username"
          required
        />

        <Typography sx={{ ...errorStyles, visibility: touched.username && errors.username ? 'visible' : 'hidden' }}>
          {(errors.username as string) || ''}
        </Typography>
      </Box>

      <Box sx={textFieldWrapper}>
        <Typography align="left">{t('password')}</Typography>

        <TextField
          name="password"
          onChange={handleChange}
          sx={{ width: 'inherit' }}
          placeholder={t('password-placeholder')}
          required
          type="password"
          data-testid="password"
        />

        <Typography sx={{ ...errorStyles, visibility: touched.password && errors.password ? 'visible' : 'hidden' }}>
          {(errors?.password as string) || ''}
        </Typography>
      </Box>

      <Button sx={{ width: '100%' }} variant="contained" onClick={submitForm} data-testid="submit-login-button">
        {t('login')}
      </Button>
    </>
  );
};

export default BaseFields;
