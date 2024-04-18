import React from 'react';
import Image from 'next/image';

const Banner = ({ imageUrl, title }) => {
  return (
    <section className='flex justify-center items-center bg-gray-200 rounded shadow-2xl'>
      {imageUrl ? (
        <div className='relative  w-full h-0' style={{ paddingBottom: '35%' }}>
          <Image
            src={imageUrl}
            alt={title}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className='rounded-xl'
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      ) : (
        <p className='text-red-500'>Error: Image not found</p>
      )}
    </section>
  );
};

export default Banner;
