import { Main } from './components/Main';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Volkhov',
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;