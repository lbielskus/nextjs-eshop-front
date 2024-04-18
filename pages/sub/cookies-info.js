import React from 'react';
import Layout from '../../components/Layout';

const Cookies = () => {
  return (
    <Layout>
      <div className='container px-4 py-8 mt-4 w-1/2 mx-auto '>
        <h1 className='text-3xl font-semibold mb-6 text-center'>Cookies</h1>
        <p className='text-lg mb-4'>
          Our website uses cookies to enhance user experience and comply with
          GDPR regulations in Europe. Cookies are small text files stored on
          your computer that track, save, and store information about your
          interactions with the website.
        </p>
        <p className='text-lg mb-4'>
          By using our website, you consent to the use of cookies in accordance
          with our{' '}
          <span
            href='/cookies-policy'
            className='text-blue-500 hover:underline'
          >
            Cookies Policy
          </span>
          .
        </p>
      </div>
    </Layout>
  );
};

export default Cookies;
