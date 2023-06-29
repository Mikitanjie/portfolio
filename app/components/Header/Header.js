import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-gray-800" style={{ backgroundImage: `url('/NavPic.png')`, backgroundSize: 'cover', backgroundPosition: '64%'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white font-semibold text-lg">MC</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-1 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium"/>
                    Home
                  </Link>
                  <Link href="#About">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"/>
                    About Me
                  </Link>
                  <Link href="#Projects">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"/>
                    Projects
                  </Link>
                  <Link href="#Skills">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"/>
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
                <div className="ml-3 relative">
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Header;
