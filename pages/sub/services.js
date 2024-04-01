import React from 'react';
import Layout from '../../components/Layout';

const Services = () => {
  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-semibold mb-4'>Services</h1>
        <p className='text-lg mb-4'>
          We offer a comprehensive range of services to meet your website
          development needs. Our services include:
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>
            SEO optimization to improve search engine rankings
          </li>
          <li className='mb-2'>
            Professional website development using modern technologies
          </li>
          <li className='mb-2'>Creative graphic design for stunning visuals</li>
          <li className='mb-2'>
            Reliable hosting solutions for seamless performance
          </li>
          <li className='mb-2'>Domain registration and management services</li>
          <li className='mb-2'>
            Mobile responsive design for optimal user experience
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Services;
