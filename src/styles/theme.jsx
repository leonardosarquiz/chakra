import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  config: {
    initialColorMode: 'light',
    useSystemColorModa: false,
  },
  colors: {
    gray: {
      50: '#F7FAFC',
      60: '#fff',
      70: '#EC7E83;',
      75: '#2D3748',
    },
  },
  fonts: {
    body: 'Inter',
  },
  fontSize: {
    lg: '36px',
    md: '20px',
    ld: '18px',
    vd: '16px',
    sm: '10px',
  },
  fontWeght: {
    lg: '800',
  },
};
const theme = extendTheme(customTheme);

export default theme;
