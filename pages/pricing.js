import { Product } from '../models/Product';
import { mongooseConnect } from '../lib/mongoose';
import PricingPlans from '../components/Pricingplans';

import { DefaultSeo } from 'next-seo';

const Pricing = ({ allProducts }) => {
  return (
    <>
      <DefaultSeo
        title='LB Websites | Pricing'
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
      <div className='container mx-auto mt-2 w-full'>
        <div className='w-full mx-auto p-8'>
          <div className='grid grid-cols-1 gap-6 w-full '>
            {allProducts?.length > 0 && <PricingPlans products={allProducts} />}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null, { sort: { _id: 1 } });

  return {
    props: {
      allProducts: JSON.parse(JSON.stringify(allProducts)),
    },
  };
}

export default Pricing;
