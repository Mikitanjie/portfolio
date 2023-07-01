import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50" style={{ backgroundImage: `url('/NavPic.png')`, backgroundSize: 'cover', backgroundPosition: '64%', marginBottom: 0 }}>
      <div className="flex items-center justify-between h-28">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-white font-semibold text-lg ml-11">MC</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-1 flex items-baseline space-x-4">
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium" href="/">
                Home
              </Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#About">
                About Me
              </Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#Projects">
                Projects
              </Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#Skills">
                Skills
              </Link>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <div className="ml-3 relative"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
