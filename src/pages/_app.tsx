import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/interface';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import { validateEnvironmentVariables } from '@/config/validate-environment-variables';
import { ModalProvider } from '@/components/modal-views/context';
import ModalsContainer from '@/components/modal-views/container';
import DrawersContainer from '@/components/drawer-views/container';

// base css file
import '@/styles/globals.css';
import '@/styles/custom.css';

import dynamic from 'next/dynamic';

const PrivateRoute = dynamic(() => import('@/layouts/_private-route'), {
  ssr: false,
});

validateEnvironmentVariables();

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function LifePlannerApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout ?? ((page) => page);


  const authenticationRequired = Component.authorization ?? false;
  return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
          >
                <ModalProvider>
                  <AnimatePresence
                      initial={false}
                      onExitComplete={() => window.scrollTo(0, 0)}
                  >
                    <>
                      {authenticationRequired ? (
                          <PrivateRoute>
                            {getLayout(<Component {...pageProps} />)}
                          </PrivateRoute>
                      ) : (
                          getLayout(<Component {...pageProps} />)
                      )}

                      <ModalsContainer />
                      <DrawersContainer />
                      <Toaster containerClassName="!top-16 sm:!top-3.5 !bottom-16 sm:!bottom-3.5" />
                    </>
                  </AnimatePresence>
                </ModalProvider>

          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
  );
}

export default LifePlannerApp;
