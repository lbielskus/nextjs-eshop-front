import { useRouter } from 'next/router';
import { FiPhone } from 'react-icons/fi';
import { useState } from 'react';

const ContactButton = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <div className='fixed bottom-4 right-4'>
      <div
        className='relative inline-block'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <span className='absolute right-16 bg-white text-green-600 px-4 py-1 rounded-xl shadow-md whitespace-nowrap border-2 border-green-500 border-opacity-30'>
            Contact us
          </span>
        )}
        <button
          className='bg-green-600 hover:bg-green-700 border-2 border-white text-white flex items-center justify-center w-16 h-16 rounded-full shadow-md'
          onClick={handleClick}
        >
          <FiPhone size={26} />
        </button>
      </div>
    </div>
  );
};

export default ContactButton;
