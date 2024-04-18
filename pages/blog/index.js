import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { mongooseConnect } from '../../lib/mongoose';
import { Blog as BlogComponent } from '../../models/Blog';
import styles from '../../styles/buttonStyles2.module.scss';

import { DefaultSeo } from 'next-seo';

export default function Blog({ posts }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, []);

  const handlePostClick = (postId) => {
    router.push(`/blog/${postId}`);
  };

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + '...';
    } else {
      return content;
    }
  };

  return (
    <>
      <DefaultSeo
        title='LB | Blog'
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

      <div className='mx-auto px-4 py-8 '>
        <h1 className='text-2xl tracking-tight  text-center  text-third mb-6'>
          Related Posts
        </h1>
        <div className='grid grid-cols-1 gap-4'>
          {loading ? (
            <p>Loading...</p>
          ) : posts.length === 0 ? (
            <p>No blog posts available.</p>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className='border p-4 rounded-xl shadow-md bg-third'
              >
                <h2 className='text-xl font-semibold text-gray-300'>
                  {post.title}
                </h2>
                <p className='text-gray-400 mb-2'>
                  Published on {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <p className='text-gray-300'>
                  {/* Truncate content to 100 words */}
                  {truncateContent(post.content, 500)}
                </p>
                <div className='mt-4 flex justify-end'>
                  <button
                    onClick={() => handlePostClick(post._id)}
                    type='button'
                    className={styles['draw-border']}
                  >
                    <div className='flex items-center space-x-2 py-2.5 px-3'>
                      <span>Read more</span>
                    </div>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const posts = await BlogComponent.find().sort({ createdAt: -1 });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
