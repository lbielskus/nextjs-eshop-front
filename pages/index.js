import { mongooseConnect } from '../lib/mongoose';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Collection from '../components/Collection';
import ContactDiv from '../components/ContactDiv';
import BlogSlide from '../components/BlogSlide';
import PricingPlans from '../components/Pricingplans.js';
import { Product } from '../models/Product';
import { Blog } from '../models/Blog';

export default function Home({
  newProducts,
  collectionProduct1,
  blogPosts,
  pricingProducts,
}) {
  const imageUrl =
    'https://res.cloudinary.com/dcknlnne1/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710164930/Webbanner_kh5btu.jpg?_s=public-apps';

  return (
    <main className='h-full p-4 bg-background'>
      <Banner imageUrl={imageUrl} title='Websites from 50 eur' />
      <hr className='my-3 h-px border-0 bg-gray-300 ' />
      <Products products={newProducts} />
      <hr className='my-3 h-px border-0 bg-gray-300 ' />
      <Collection product={collectionProduct1} />

      <BlogSlide posts={blogPosts} />
      <hr className='my-3 h-px border-0 bg-gray-300 ' />
      <PricingPlans products={pricingProducts} />
      <hr className='my-3 h-px border-0 bg-gray-300 ' />
      <ContactDiv />
    </main>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  const collectionId = '65814c59ebe487e1589d437e';

  const collectionProduct1 = await Product.findById(collectionId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: 1 },
    limit: 2,
  });

  const blogPosts = await Blog.find().sort({ createdAt: -1 }).limit(5);

  const pricingProducts = await Product.find({
    _id: {
      $in: [
        '65e64f0f283b34d56e536412',
        '65ec4f3fcf19fe7cb322f75e',
        '65ec50cbcf19fe7cb322f775',
        '65ec526ccf19fe7cb322f782',
      ],
    },
  });

  return {
    props: {
      collectionProduct1: JSON.parse(JSON.stringify(collectionProduct1)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      blogPosts: JSON.parse(JSON.stringify(blogPosts)),
      pricingProducts: JSON.parse(JSON.stringify(pricingProducts)),
    },
  };
}
