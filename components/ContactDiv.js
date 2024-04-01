import React from 'react';
import Link from 'next/link';
import Spinner from '../components/Spinner';

const ContactDiv = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg  text-center shadow-2xl'>
      <h2 className='text-xl font-bold mb-2 text-text'>Contact Us</h2>
      <p className='text-gray-700 mb-4'>
        Have questions or need assistance? Feel free to contact us.
      </p>
      <Link href='/contact'>
        <button className='bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>
          Contact
        </button>
      </Link>
    </div>
  );
};

export default ContactDiv;
