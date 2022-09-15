// libraries
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    margin: 'auto',
    padding: 30,
    boxShadow: `-1px 16px 33px -14px rgba(165, 210, 216, 1)`,
    maxWidth: 400,
    width: '100%',
    borderRadius: 12,
  },
}));
export default useStyles;

export const errorStyles = {
  fontSize: 12,
  lineHeight: '16px',
  color: 'red',
  height: 16,
  textAlign: 'left',
  mt: 0.5,
};

export const textFieldWrapper = {
  width: 'inherit',
  mb: (theme: Theme) => theme.spacing(1),
};
