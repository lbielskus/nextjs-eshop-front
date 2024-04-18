import React from 'react';
import Layout from '../../components/Layout';

const CodingLanguages = () => {
  return (
    <Layout>
      <div className='container px-4 py-8 mt-4 w-1/2 mx-auto '>
        <h1 className='text-3xl font-semibold mb-6 text-center'>
          Coding Languages
        </h1>
        <p className='text-lg mb-4'>
          Our website development stack includes various coding languages and
          frameworks, each serving a specific purpose:
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>
            Next.js: React framework for server-rendered applications
          </li>
          <li className='mb-2'>
            React.js: JavaScript library for building user interfaces
          </li>
          <li className='mb-2'>
            Node.js: JavaScript runtime for server-side development
          </li>
          <li className='mb-2'>
            JavaScript: Versatile programming language for web development
          </li>
          <li className='mb-2'>
            CSS: Styling language for web page layout and design
          </li>
          <li className='mb-2'>
            Tailwind CSS: Utility-first CSS framework for rapid UI development
          </li>
          <li className='mb-2'>
            Sass: CSS preprocessor with additional features
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default CodingLanguages;
