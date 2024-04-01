import React from 'react';
import Layout from '../../components/Layout';

const HowItWorks = () => {
  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-semibold mb-4'>How it Works</h1>
        <p className='text-lg mb-4'>
          Website development involves several steps, from planning and
          designing to coding and launching. Here&#39;s a brief overview of the
          typical process:
        </p>
        <ol className='list-decimal ml-6'>
          <li className='mb-2'>Define project goals and requirements</li>
          <li className='mb-2'>Create wireframes and design mockups</li>
          <li className='mb-2'>Develop front-end and back-end functionality</li>
          <li className='mb-2'>Test website for bugs and responsiveness</li>
          <li className='mb-2'>Deploy website to a hosting server</li>
          <li className='mb-2'>Optimize website for search engines</li>
          <li className='mb-2'>Maintain and update website regularly</li>
        </ol>
      </div>
    </Layout>
  );
};

export default HowItWorks;
