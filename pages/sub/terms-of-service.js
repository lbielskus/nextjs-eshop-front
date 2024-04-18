import React from 'react';
import Layout from '../../components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className='container px-4 py-8 mt-4 w-1/2 mx-auto '>
        <h1 className='text-3xl font-semibold mb-6 text-center'>
          Terms of Service
        </h1>
        <p className='text-lg mb-4'>
          Our Terms of Service govern your use of our website development
          services. By accessing or using our services, you agree to be bound by
          these terms. Please read them carefully before proceeding.
        </p>
        <p className='text-lg mb-4'>
          For more information, please refer to our{' '}
          <span
            href='/terms-of-service'
            className='text-blue-500 hover:underline'
          >
            Terms of Service
          </span>
          .
        </p>
      </div>
    </Layout>
  );
};

export default TermsOfService;
