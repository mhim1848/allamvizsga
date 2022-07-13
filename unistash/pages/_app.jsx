import Nav from "../components/Nav";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

// modify the MyApp component to keep global state
// or put components here that are the same for every page
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {/* Navbar will be present on all pages now */}
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
