import React from 'react';
import Layout from '../../components/Layout';

const Hosting = () => {
  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-semibold mb-4'>Hosting</h1>
        <p className='text-lg mb-4'>
          Hosting is the service that allows your website to be accessible on
          the internet. We take care of all hosting-related questions and ensure
          your website is hosted and visible online. Our hosting service
          includes:
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>Reliable hosting infrastructure</li>
          <li className='mb-2'>24/7 technical support</li>
          <li className='mb-2'>Regular backups and security updates</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Hosting;
