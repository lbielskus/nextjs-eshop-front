import '../styles/globals.css';
import { Rubik } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContextProvider } from '../lib/CartContext';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import ContactButton from '../components/ContactButton';

import '../styles/buttonStyles.module.scss';

const rubik = Rubik({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  let showNavbar = true;

  if (
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/forgot-password'
  ) {
    showNavbar = false;
  }

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <CartContextProvider>
          <main
            className={`${rubik.className} min-h-screen max-w-screen-2xl mx-auto bg-background sm:px-6`}
          >
            <Header />
            <Toaster position='top-center' />
            <Component
              {...pageProps}
              className={rubik.className + ' sm:mt-36'}
            />
            <Footer />
            <ContactButton />
          </main>
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}
