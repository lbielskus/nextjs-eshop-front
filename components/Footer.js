import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const logoUrl =
  'https://res.cloudinary.com/dcknlnne1/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709827936/favicon-32x32_rllh9h.jpg?_s=public-apps';

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    tiktok: 'https://www.tiktok.com/explore',
  });

  const handleIconClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className='footer-container py-16 mt-3'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='flex flex-wrap w-full justify-center mb-2 text-center'>
          <div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0'>
            <div className='footer-link-items'>
              <h2 className='text-xl font-semibold mb-4 text-text'>About Us</h2>
              <div className='flex flex-col mb-2 text-text'>
                <Link href='/sub/how-it-works'>How it works</Link>
                <Link href='/sub/mobile-responsive'>Mobile responsive</Link>
                <Link href='/sub/coding-languages'>Coding languages</Link>
                <Link href='/sub/cookies-info'>Cookies</Link>
                <Link href='/sub/terms-of-service'>Terms of Service</Link>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-text'>
            <div className='footer-link-items text-text'>
              <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
              <div className='flex flex-col mb-2'>
                <Link href='/contact'>Contact</Link>
                <Link href='/sub/support'>Support</Link>
                <Link href='/sub/faq'>Frequently questions</Link>
                <Link href='/sub/tutorials'>Tutorials</Link>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-text'>
            <div className='footer-link-items text-text'>
              <h2 className='text-xl font-semibold mb-4'>Websites</h2>
              <div className='flex flex-col mb-2'>
                <Link href='/products'>Examples</Link>
                <Link href='/pricing'>Pricing</Link>
                <Link href='/sub/domains'>Domains</Link>
                <Link href='/sub/hosting'>Hosting</Link>
                <Link href='/sub/services'>Services</Link>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 text-text'>
            <div className='footer-link-items text-text'>
              <h2 className='text-xl font-semibold mb-4'>Social Media</h2>
              <div className='flex flex-col mb-2'>
                <Link href='/'>Instagram</Link>
                <Link href='/'>Facebook</Link>
                <Link href='/'>Youtube</Link>
                <Link href='/'>LinkedIn</Link>
                <Link href='/'>TikTok</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <div className='footer-logo mb-4'>
            <Link href='/' className='social-logo flex items-center'>
              <Image src={logoUrl} alt='logo-familia' width={30} height={30} />
              <span className='text-2xl font-semibold ml-2 text-text'>
                Websites
              </span>
            </Link>
          </div>
          <div className='social-icons flex items-center space-x-4 text-text mt-8'>
            <div
              onClick={() => handleIconClick(socialLinks.facebook)}
              role='button'
              className='cursor-pointer'
            >
              <FaFacebook size={24} />
            </div>
            <div
              onClick={() => handleIconClick(socialLinks.instagram)}
              role='button'
              className='cursor-pointer'
            >
              <FaInstagram size={24} />
            </div>
            <div
              onClick={() => handleIconClick(socialLinks.linkedin)}
              role='button'
              className='cursor-pointer'
            >
              <FaLinkedin size={24} />
            </div>
            <div
              onClick={() => handleIconClick(socialLinks.tiktok)}
              role='button'
              className='cursor-pointer'
            >
              <FaTiktok size={24} />
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <small className='website-rights text-text'>
            Created by LB Websites © 2024
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
