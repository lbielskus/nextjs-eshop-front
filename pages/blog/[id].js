import { useEffect, useState } from 'react';
import axios from 'axios';
import { mongooseConnect } from '../../lib/mongoose';
import { Blog } from '../../models/Blog';

import { DefaultSeo } from 'next-seo';

export default function BlogPost({ post }) {
  if (!post) {
    return <p>Post not found.</p>;
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <>
      <DefaultSeo
        title={`LB | ${post.title}`}
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
      <div className='mx-auto px-4 pb-16 bg-gray-200 bg-opacity-70 rounded shadow-xl mt-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6 font-latin text-center'>
          {post.title}
        </h1>
        <p className='text-gray-600  font-latin text-center mb-8'>
          Published on {formattedDate}
        </p>
        <div className='text-gray-400 w-full sm:w-1/2  mx-auto'>
          <pre
            className='text-gray-700 whitespace-pre-wrap '
            style={{
              fontFamily: 'montserrat, latin',
              fontSize: '16px',
              lineHeight: '1.5',
            }}
          >
            {post.content}
          </pre>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const post = await Blog.findById(id);
  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
}
