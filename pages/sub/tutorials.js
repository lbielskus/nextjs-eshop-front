import Layout from '../../components/Layout';

const Tutorials = () => {
  return (
    <Layout>
      <div className='container px-4 py-8 mt-4 w-1/2 mx-auto '>
        <h1 className='text-3xl font-semibold mb-6 text-center'>Tutorials</h1>
        <p className='mb-4'>
          Welcome to our tutorials section! Here you&#39;ll find step-by-step
          guides on how to navigate through our services and make the most out
          of your experience.
        </p>
        <h2 className='text-xl font-semibold mb-2'>How to Order</h2>
        <p className='mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          hendrerit mi eu ligula malesuada, eget condimentum justo placerat.
        </p>
        <h2 className='text-xl font-semibold mb-2'>Navigating Our Services</h2>
        <p className='mb-4'>
          Ut maximus, sem at molestie tempor, lacus enim venenatis orci, a
          volutpat eros leo in tellus. Aenean tincidunt volutpat nisl in
          faucibus.
        </p>
      </div>
    </Layout>
  );
};

export default Tutorials;
