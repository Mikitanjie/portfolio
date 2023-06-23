import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-gray-800" style={{ backgroundImage: `url('/NavPic.png')`, backgroundSize: 'cover', backgroundPosition: '50% 50%'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white font-semibold text-lg">MC</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-11 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"/>
                    <span>Home</span>
                  </Link>
                  <Link href="#About">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"/>
                    <span>About Me</span>
                  </Link>
                  <Link href="#Projects">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"/>
                    <span>Projects</span>
                  </Link>
                  <Link href="#Skills">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"/>
                    <span>Skills</span>
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
