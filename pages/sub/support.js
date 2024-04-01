import React from 'react';
import Layout from '../../components/Layout';

const Support = () => {
  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-semibold mb-4'>Support</h1>
        <p className='text-lg mb-4'>
          We provide comprehensive support to our customers to ensure their
          satisfaction with our services. Here&#39;s what you can expect:
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>Responsive support team</li>
          <li className='mb-2'>Guaranteed response within 2-3 business days</li>
          <li className='mb-2'>
            Contact phone number provided to customers who have made an order
            for emergency situations
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Support;
