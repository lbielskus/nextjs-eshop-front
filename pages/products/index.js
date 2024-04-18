import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CartContext } from '../../lib/CartContext';
import { mongooseConnect } from '../../lib/mongoose';
import { Product } from '../../models/Product';
import Spinner from '../../components/Spinner';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { DefaultSeo } from 'next-seo';

import styles from '../../styles/buttonStyles.module.scss';

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const calculatePriceWithTaxes = (price) => {
  const taxRate = 0.21;
  const totalPrice = price + price * taxRate;
  return totalPrice.toFixed(2);
};

export default function Products({ allProducts }) {
  const { addProduct } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    Array(allProducts.length).fill(0)
  );

  useEffect(() => {
    const filterProducts = () => {
      if (searchQuery === '') {
        setFilteredProducts(allProducts);
      } else {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = allProducts.filter((product) =>
          product.title.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
      }
    };

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    filterProducts();
  }, [searchQuery, allProducts]);

  const handleNextImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] + 1) % filteredProducts[index].images.length;
      return newIndexes;
    });
  };

  const handlePreviousImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        newIndexes[index] === 0
          ? filteredProducts[index].images.length - 1
          : newIndexes[index] - 1;
      return newIndexes;
    });
  };

  return (
    <>
      <DefaultSeo
        title='LB Websites | Examples'
        description='Websites for your niche'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.yourwebsite.com',
          site_name: 'LB Websites',
          title: 'LB Websites',
          description: 'Websites for your niche',
          images: [
            {
              url: '',
              width: 1200,
              height: 630,
              alt: 'Your image alt text',
            },
          ],
        }}
      />
      <div className='flex justify-center min-h-screen bg-third bg-opacity-95 rounded-xl mt-10 mb-10 pb-20'>
        {loading ? (
          <div className='flex justify-center items-center min-h-screen w-full '>
            <Spinner />
          </div>
        ) : (
          <div className=' w-full px-4 md:p-0 '>
            <input
              type='text'
              placeholder='Search products'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='mb-4 px-4 py-2 rounded-xl border border-gray-300 w-full text-gray-700'
            />

            {filteredProducts.length === 0 ? (
              <p className='text-center text-gray-200 pt-20'>
                No matching products found.
              </p>
            ) : (
              <div className=' grid grid-cols-1 gap-x-3 md:gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 xl:gap-x-8  '>
                {filteredProducts.map((product, index) => (
                  <div
                    key={product._id}
                    className=' rounded-xl group relative w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto'
                  >
                    <div className='group block overflow-hidden border-4 border-primary bg-gray-200 rounded-xl border-opacity-40 w-[340px] mx-auto'>
                      <div className='p-1'>
                        <div className='relative h-[400px] sm:h-[400px]'>
                          {product.images.map((image, imgIndex) => (
                            <Image
                              key={imgIndex}
                              src={image}
                              alt=''
                              width={400}
                              height={400}
                              loading='lazy'
                              className={`absolute inset-0 h-full w-full object-contain ${
                                imgIndex === currentImageIndexes[index]
                                  ? ''
                                  : 'hidden'
                              }`}
                            />
                          ))}

                          <div className='absolute inset-y-0 left-0 flex items-center'>
                            <button
                              onClick={() => handlePreviousImage(index)}
                              className='bg-gray-400 bg-opacity-70 text-white w-8 h-8 rounded-full inline-flex justify-center items-center ml-3'
                            >
                              <FiChevronLeft className='text-xl' />
                            </button>
                          </div>
                          <div className='absolute inset-y-0 right-0 flex items-center'>
                            <button
                              onClick={() => handleNextImage(index)}
                              className='bg-gray-400 bg-opacity-70 text-white w-8 h-8 rounded-full inline-flex justify-center items-center mr-3'
                            >
                              <FiChevronRight className='text-xl' />
                            </button>
                          </div>
                        </div>

                        <div className='relative p-2  '>
                          <Link href={'/products/' + product._id}>
                            <h3 className='text-md text-gray-700 font-medium  truncate text-center'>
                              {product.title}
                            </h3>
                          </Link>

                          <div className='mt-1.5 flex items-center justify-between text-text'>
                            <p className='tracking-wide text-primary font-medium'>
                              €{' '}
                              {formatPrice(
                                calculatePriceWithTaxes(product.price)
                              )}
                            </p>

                            <button
                              onClick={() => {
                                addProduct(product._id);
                                toast.success('Item added to cart!!');
                              }}
                              type='button'
                              className={`${styles['draw-border']} flex items-center space-x-2 py-2.5 px-3`}
                            >
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
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null, { sort: { _id: 1 } });

  const productsWithIndexes = allProducts.map((product) => ({
    ...product._doc,
    currentImageIndex: 0,
  }));

  return {
    props: {
      allProducts: JSON.parse(JSON.stringify(productsWithIndexes)),
    },
  };
}
