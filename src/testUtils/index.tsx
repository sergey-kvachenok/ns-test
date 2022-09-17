// libraries
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/styles';
// styles
import { theme } from '../App';
import store from '../store';

const renderWithProviders = (component: ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>{component}</BrowserRouter>
      </Provider>
    </ThemeProvider>,
  );
};

export default renderWithProviders;
