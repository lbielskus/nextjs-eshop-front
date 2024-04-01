import React from 'react';
import Layout from '../../components/Layout';

const MobileResponsive = () => {
  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-semibold mb-4'>Mobile Responsive</h1>
        <p className='text-lg mb-4'>
          Mobile responsiveness is crucial for modern websites due to the
          increasing usage of smartphones and tablets. Here&#39;s why it&#39;s
          important:
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>
            Provides a better user experience on mobile devices
          </li>
          <li className='mb-2'>Improves SEO ranking on search engines</li>
          <li className='mb-2'>
            Increases website accessibility for all users
          </li>
          <li className='mb-2'>Enhances brand reputation and credibility</li>
          <li className='mb-2'>Drives higher conversion rates and sales</li>
        </ul>
      </div>
    </Layout>
  );
};

export default MobileResponsive;
