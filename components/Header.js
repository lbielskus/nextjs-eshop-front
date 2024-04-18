import Link from 'next/link';
import { useContext, useState } from 'react';
import { CartContext } from '../lib/CartContext';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { CgProfile } from 'react-icons/cg';
import { FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { cartProducts } = useContext(CartContext);
  const router = useRouter();
  const { pathname } = router;
  const { data: session } = useSession();

  const redirectToProfile = () => {
    router.push('/profile');
  };

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      <header className='bg-third sticky top-0 z-40 w-full px-2 lg:px-4 rounded-b-xl shadow-xl '>
        <div className='mx-auto flex h-16 max-w-screen-2xl items-center justify-between border-b border-primary border-opacity-40 bg-third text-white  '>
          <Link
            className='flex gap-1 items-center text-white font-medium text-lg hover:text-zinc-400 '
            href='/'
          >
            <Image
              src='https://res.cloudinary.com/dcknlnne1/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709827936/favicon-32x32_rllh9h.jpg?_s=public-apps'
              alt='Logo'
              width={24}
              height={24}
            />
            <span> Websites</span>
          </Link>

          {/* Mobile nav menu */}
          <div className='lg:hidden'>
            <button
              className='text-primary flex items-center focus:outline-none absolute left-32 top-5'
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <span>{isMobileNavOpen ? 'Menu' : 'Menu'}</span>
              {isMobileNavOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-4 h-4 ml-1 mt-1'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <FiChevronDown className='ml-1 mt-1' />
              )}
            </button>
            {isMobileNavOpen && (
              <div className='absolute top-[73px] left-0 w-2/3 mx-auto  right-0 bg-gray-300 p-4 rounded-xl border-solid border-third border-2 z-30  sm:w-full md:w-80 lg:w-80'>
                <ul className='flex flex-col gap-2 text-center'>
                  <li>
                    <Link
                      className={`${
                        pathname === '/' ? 'text-primary' : 'text-third'
                      } transition hover:text-primary`}
                      href='/'
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === '/products' ? 'text-primary' : 'text-third'
                      } transition hover:text-primary`}
                      href='/products'
                      onClick={handleLinkClick}
                    >
                      Examples
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === '/contact' ? 'text-primary' : 'text-third'
                      } transition hover:text-primary`}
                      href='/contact'
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === '/pricing' ? 'text-primary' : 'text-third'
                      } transition hover:text-primary`}
                      href='/pricing'
                      onClick={handleLinkClick}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        pathname === '/blog' ? 'text-primary' : 'text-third'
                      } transition hover:text-primary`}
                      href='/blog'
                      onClick={handleLinkClick}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* nav */}
          <nav aria-label='Global' className='hidden lg:block'>
            <ul className='flex items-center gap-6 text-lg'>
              <li>
                <Link
                  className={`text-white transition hover:text-zinc-400/75 ${
                    pathname === '/' ? 'text-white' : ''
                  } `}
                  href='/'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`text-white transition hover:text-zinc-400/75 ${
                    pathname === '/products' ? 'text-white' : ''
                  } `}
                  href='/products'
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  className={`text-white transition hover:text-zinc-400/75 ${
                    pathname === '/contact' ? 'text-white' : ''
                  } `}
                  href='/contact'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className={`text-white transition hover:text-zinc-400/75 ${
                    pathname === '/pricing' ? 'text-white' : ''
                  } `}
                  href='/pricing'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className={`text-white transition hover:text-zinc-400/75 ${
                    pathname === '/blog' ? 'text-white' : ''
                  } `}
                  href='/blog'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Cart and session */}
          <div className='flex items-center gap-2'>
            <div className='ml-4 flow-root lg:ml-4'>
              <Link href='/cart' className='group -m-2 flex items-center p-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
                <div className='hidden lg:flex'>
                  <span className='ml-2 text-lg text-white font-bold group-hover:text-green-600'>
                    {cartProducts.length}
                  </span>
                  <span className='sr-only'>items in cart, view bag</span>
                </div>
              </Link>
            </div>

            <span className='mx-2 hidden sm:block '>|</span>

            {session ? (
              <div className='sm:flex sm:gap-2 items-center border-primary pr-1'>
                <div className='flex items-center' onClick={redirectToProfile}>
                  <span className='ml-2 mr-2 text-xs text-primary  hidden sm:block'>
                    {session.user.email}
                  </span>
                  <CgProfile className='ml-1 h-9 w-9 text-white-500 rounded-full object-cover object-center cursor-pointer' />
                </div>
                <button
                  className='text-xs text-white hover:underline hidden sm:block'
                  onClick={async () => {
                    await signOut();
                    router.push('/');
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className='flex gap-4'>
                <Link href='/signup'>
                  <span className='text-xs text-white hover:underline'>
                    Register
                  </span>
                </Link>
                <Link href='/login'>
                  <span className='text-xs text-white hover:underline'>
                    Login
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
