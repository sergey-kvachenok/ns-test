import { Theme } from '@mui/material';
import { BREAKPOINTS } from '../../App';

export const rootContainerStyles = {
  maxWidth: '1440px',
  margin: 'auto',
  width: '100%',
};

export const containerStyles = (theme: Theme) => ({
  backgroundColor: 'white',
  borderBottomLeftRadius: 16,
  borderBottomRightRadius: 16,
  padding: theme.spacing(2, 4),
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: `-1px 16px 33px -14px rgba(165, 210, 216, 1)`,
  position: 'sticky',
  top: 0,
  zIndex: 1,

  [theme.breakpoints.down(BREAKPOINTS.xs)]: {
    justifyContent: 'end',
  },
});

export const titleStyles = (theme: Theme) => ({
  [theme.breakpoints.down(BREAKPOINTS.xs)]: {
    display: 'none',
  },
});

export const childrenContainer = (theme: Theme) => ({
  m: theme.spacing(3, 4),
  boxShadow: `-1px 16px 33px -14px rgba(165, 210, 216, 1)`,
});
