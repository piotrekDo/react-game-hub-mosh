import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './theme';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
