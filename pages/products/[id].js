import { CartContext } from '../../lib/CartContext';
import { mongooseConnect } from '../../lib/mongoose';
import { Product } from '../../models/Product';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import sanitizeHtml from 'sanitize-html';
import Image from 'next/image';

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const calculatePriceWithTaxes = (price) => {
  const taxRate = 0.21;
  const vat = price * taxRate;
  const total = price + vat;
  return { vat: vat.toFixed(2), total: total.toFixed(2) };
};

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  if (product) {
    const { vat, total } = calculatePriceWithTaxes(product.price);

    const sanitizedDetails = sanitizeHtml(product.details, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'ul',
        'ol',
        'li',
      ]),
      allowedAttributes: sanitizeHtml.defaults.allowedAttributes,
    });

    const descriptionWithLineBreaks = product.description.replace(
      /\n/g,
      '<br>'
    );

    return (
      <section className='mt-20 md:mt-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
          <div className='lg:aspect-h-2 lg:aspect-w-2 lg:rounded-lg overflow-hidden relative'>
            <Image
              src={product.images[currentImageIndex]}
              alt={product.images[currentImageIndex]}
              width={400}
              height={400}
              className='w-full h-full object-contain border border-primary rounded-lg bg-gray-200 max-h-[400px] md:max-h-[600px] lg:max-h-[700px]'
            />

            <button
              onClick={handleNextImage}
              className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary bg-opacity-75 text-gray-100 rounded-full p-2 w-10 h-10'
            >
              {'>'}
            </button>

            <button
              onClick={handlePreviousImage}
              className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary bg-opacity-75 text-gray-100 rounded-full p-2 w-10 h-10'
            >
              {'<'}
            </button>
          </div>

          <div className='lg:col-span-1 p-4 lg:p-8 border'>
            <h1 className='text-3xl font-semibold text-gray-900'>
              {product.title}
            </h1>
            <div className='mt-4 flex justify-between items-center'>
              <h2 className='text-xl font-semibold text-gray-900'>Price</h2>
              <p className='mt-2 text-primary font-semibold text-lg'>
                € {formatPrice(product.price)}
              </p>
            </div>

            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold text-gray-900'>VAT (21%)</h2>
              <p className='mt-2 text-accent font-semibold text-lg'>
                € {formatPrice(vat)}
              </p>
            </div>

            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold text-gray-900'>Total</h2>
              <p className='mt-2 text-primary font-semibold text-lg'>
                € {formatPrice(total)}
              </p>
            </div>
            <div className='flex justify-end mt-4 '>
              <button
                className='bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark w-[192px]'
                onClick={() => {
                  addProduct(product._id);
                  toast.success('Item added to cart!!');
                }}
              >
                Add to Cart
              </button>
            </div>
            <div className='mt-6'>
              <h2 className='text-xl font-semibold text-gray-900'>Details</h2>

              <div dangerouslySetInnerHTML={{ __html: sanitizedDetails }} />
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 my-3'>
              <div>
                <label className='text-text font-semibold'>Brand</label>
                <p className='mt-2 text-accent list-disc list-inside'>
                  {product.brand}
                </p>
              </div>

              <div>
                <label className='text-text font-semibold'>Gender</label>
                <p className='mt-2 text-accent list-disc list-inside'>
                  {product.gender}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 my-3'>
              <div>
                <label className='text-text font-semibold'>Sizes</label>
                <p className='mt-2 text-accent list-disc list-inside'>
                  {product.sizes}
                </p>
              </div>

              <div>
                <label className='text-text font-semibold'>Colors</label>
                <p className='mt-2 text-accent list-disc list-inside'>
                  {product.colors}
                </p>
              </div>
            </div>

            <div className='mt-6'>
              <h2 className='text-xl font-semibold text-gray-900'>
                Description
              </h2>

              <p
                className='mt-2 text-gray-700'
                dangerouslySetInnerHTML={{ __html: descriptionWithLineBreaks }}
              ></p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <p>Product not found.</p>;
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
