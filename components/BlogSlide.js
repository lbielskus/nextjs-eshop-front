import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

const BlogSlide = ({ posts }) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPostIndex((prevIndex) =>
        prevIndex === posts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [posts.length]);

  const truncateContent = (content, length) => {
    return content.length > length
      ? content.substring(0, length) + '...'
      : content;
  };

  const redirectToPost = (postId) => {
    window.location.href = `/blog/${postId}`;
  };

  return (
    <div className='  content-center py-10 max-w-screen-2xl'>
      <h2 className='text-2xl  tracking-tight text-text text-center  my-15 '>
        Featured Blog Posts
      </h2>
      {posts.length > 0 ? (
        <div className='border p-4 rounded shadow-xl content-center py-10 max-w-screen-2xl bg-gray-200'>
          <h2 className='text-xl font-semibold text-gray-900'>
            {posts[currentPostIndex].title}
          </h2>
          <p className='text-gray-600 mb-2'>
            Published on{' '}
            {format(new Date(posts[currentPostIndex].createdAt), 'MM/dd/yyyy')}{' '}
          </p>
          <p className='text-gray-700'>
            {truncateContent(posts[currentPostIndex].content, 500)}
          </p>
          <div className='mt-4'>
            <button
              className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-third to-primary group-hover:from-third group-hover:to-primary hover:text-white dark:text-white  '
              onClick={() => redirectToPost(posts[currentPostIndex]._id)}
            >
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-third rounded-md group-hover:bg-opacity-0'>
                Read More
              </span>
            </button>
          </div>
        </div>
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default BlogSlide;
