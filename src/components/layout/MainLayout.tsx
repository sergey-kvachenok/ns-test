// libraries
import { Box, Button, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// constants
import { routes } from '../../constants/routes';
// api
import { useAppDispatch } from '../../hooks/redux';
import { clearToken } from '../../store/slices/authSlice';
// styles
import { containerStyles, titleStyles, rootContainerStyles, childrenContainer } from './MainLayout.styles';

type MainLayoutPropsType = {
  children: ReactElement;
  title?: string;
};

const MainLayout: FC<MainLayoutPropsType> = ({ children, title }) => {
  const { t } = useTranslation(['common']);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = async () => {
    dispatch(clearToken());
    navigate(routes.login, { replace: true });
  };

  return (
    <Box sx={rootContainerStyles}>
      <Box sx={containerStyles}>
        <Typography variant="h3" component="h1" sx={titleStyles}>
          {title}
        </Typography>
        <Button data-testid="logout-button" variant="outlined" onClick={logout} sx={{ maxHeight: '40px' }}>
          {t('logout')}
        </Button>
      </Box>
      <Box sx={childrenContainer}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
