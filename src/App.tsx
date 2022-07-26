import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { TasklistProvider } from './hooks';

import { GlobalStyles, lightTheme, darkTheme } from './common/styles';

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <TasklistProvider>
        <Routes />
        <GlobalStyles />
      </TasklistProvider>
    </ThemeProvider>
  );
};
