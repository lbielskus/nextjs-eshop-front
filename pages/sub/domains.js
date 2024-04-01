import React from 'react';
import Layout from '../../components/Layout';

const Domains = () => {
  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-semibold mb-4'>Domains</h1>
        <p className='text-lg mb-4'>
          A domain is the unique address of your website on the internet.
          It&#39;s important because it represents your brand identity and helps
          users find you online. Here&#39;s how to buy and migrate domains:
        </p>
        <ol className='list-decimal ml-6'>
          <li className='mb-2'>
            Search for an available domain name through a domain registrar like
            GoDaddy, Namecheap, or Google Domains.
          </li>
          <li className='mb-2'>
            Purchase the domain and complete the registration process by
            providing your contact information and payment details.
          </li>
          <li className='mb-2'>
            To migrate a domain, obtain the necessary authorization code from
            your current registrar and initiate the transfer process with your
            new registrar.
          </li>
        </ol>
      </div>
    </Layout>
  );
};

export default Domains;
