import '../styles/globals.css';
import { useEffect } from 'react';

const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    async function liffLogin() {
      const liff = (await import('@line/liff')).default;
      try {
        await liff.init({ liffId });
      } catch (err) {
        console.error('liff init error', err.message);
      }
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    }
    liffLogin();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
