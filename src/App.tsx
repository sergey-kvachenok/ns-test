// libraries
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
// components
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
// constants
import { protectedRoutes } from './constants/routes';
// styles
import './App.css';
// utils
import './i18n';
import store, { persistor } from './store';

export const BREAKPOINTS = {
  xs: 345,
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1920,
};

export const theme = createTheme({
  breakpoints: {
    values: BREAKPOINTS,
  },
});

function App() {
  const { token } = store.getState().auth;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Router>
              <Routes>
                {protectedRoutes.map(({ path, component }) => (
                  <Route key={path} path={path} element={<PrivateRoute>{component}</PrivateRoute>} />
                ))}

                <Route path="/login" element={!token ? <Login /> : <Navigate to={'/'} replace />} />
              </Routes>
            </Router>
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
