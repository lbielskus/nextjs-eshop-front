import React from 'react';
import Layout from '../../components/Layout';

const HowItWorks = () => {
  return (
    <Layout>
      <div className='container px-4 py-8 mt-4 w-1/2 mx-auto '>
        <h1 className='text-3xl font-semibold mb-6 text-center'>
          How it Works
        </h1>
        <p className='text-lg mb-8 '>
          Website development involves several steps, from planning and
          designing to coding and launching. Here&#39;s a brief overview of the
          typical process:
        </p>
        <div className='text-center content-center'>
          <ol className='list-decimal '>
            <li className='mb-2'>Define project goals and requirements</li>
            <li className='mb-2'>Create wireframes and design mockups</li>
            <li className='mb-2'>
              Develop front-end and back-end functionality
            </li>
            <li className='mb-2'>Test website for bugs and responsiveness</li>
            <li className='mb-2'>Deploy website to a hosting server</li>
            <li className='mb-2'>Optimize website for search engines</li>
            <li className='mb-2'>Maintain and update website regularly</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
