import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';

import { GlobalStyles, lightTheme, darkTheme } from './common/styles';

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};
