import { useState } from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../lib/CartContext';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import styles from '../styles/buttonStyles.module.scss';

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const calculatePriceWithTaxes = (price) => {
  const taxRate = 0.21;
  const totalPrice = price + price * taxRate;
  return totalPrice.toFixed(2);
};

export default function Products({ products }) {
  const { addProduct } = useContext(CartContext);

  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    Array(products.length).fill(0)
  );

  const handleNextImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] + 1) % products[index].images.length;
      return newIndexes;
    });
  };

  const handlePreviousImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        newIndexes[index] === 0
          ? products[index].images.length - 1
          : newIndexes[index] - 1;
      return newIndexes;
    });
  };

  return (
    <div className='bg-third rounded-xl shadow-xl'>
      <div className='content-center py-10 max-w-screen-2xl'>
        <h2 className='text-2xl tracking-tight text-gray-300 text-center my-15'>
          Our Latest Products
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8 justify-center '>
          {products?.length > 0 &&
            products.map((product, index) => (
              <div key={product._id} className='group relative mx-auto'>
                <div className='group block overflow-hidden border-4 border-third rounded-xl border-opacity-20 w-[340px] h-[500px] shadow-xl relative bg-gray-200'>
                  <div className='p-1'>
                    <div className='relative h-[400px] sm:h-[400px] rounded-xl'>
                      {product.images.map((image, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={image}
                          alt=''
                          loading='lazy'
                          className={`absolute inset-0 h-full w-full object-contain ${
                            imgIndex === currentImageIndexes[index]
                              ? ''
                              : 'hidden'
                          }`}
                          width={340}
                          height={500}
                        />
                      ))}

                      <div className='absolute inset-y-0 left-0 flex items-center'>
                        <button
                          onClick={() => handlePreviousImage(index)}
                          className='bg-primary bg-opacity-70 text-white w-8 h-8 rounded-full inline-flex justify-center items-center ml-3'
                        >
                          <FiChevronLeft className='text-xl' />
                        </button>
                      </div>
                      <div className='absolute inset-y-0 right-0 flex items-center'>
                        <button
                          onClick={() => handleNextImage(index)}
                          className='bg-primary bg-opacity-70 text-white w-8 h-8 rounded-full inline-flex justify-center items-center mr-3'
                        >
                          <FiChevronRight className='text-xl' />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='absolute bottom-0 left-0 w-full p-2'>
                    <Link href={'/products/' + product._id}>
                      <h3 className='text-md text-gray-600 truncate text-center text-lg font-medium'>
                        {product.title}
                      </h3>
                    </Link>

                    <div className='mt-1.5 flex items-center justify-between text-text'>
                      <p className='tracking-wide text-primary font-medium text-lg'>
                        €{formatPrice(calculatePriceWithTaxes(product.price))}
                      </p>

                      <button
                        onClick={() => {
                          addProduct(product._id);
                          toast.success('Item added to cart!!');
                        }}
                        type='button'
                        className={styles['draw-border']}
                      >
                        <div className='flex items-center space-x-2 py-2.5 px-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                            />
                          </svg>

                          <span>Add</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
