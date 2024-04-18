import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import ContactForm from '../components/ContactForm';
import { DefaultSeo } from 'next-seo';

const ContactPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <DefaultSeo
        title='LB Websites | Contact'
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
      <div className='container mx-auto mt-16'>
        {loading ? (
          <div className='flex justify-center items-center min-h-screen'>
            <Spinner />
          </div>
        ) : (
          <>
            <ContactForm />
          </>
        )}
      </div>
    </>
  );
};

export default ContactPage;
