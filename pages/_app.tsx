import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* Navbar will be present on all pages now */}
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
