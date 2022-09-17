import ServerListPage from '../pages/ServerList';

export const routes = {
  login: '/login',
  dashboard: '/',
};

export const protectedRoutes = [
  {
    path: routes.dashboard,
    component: <ServerListPage />,
  },
];
