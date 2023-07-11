import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="nav sticky top-0 left-0 right-0 z-50" style={{ backgroundImage: `url(https://e0.pxfuel.com/wallpapers/170/477/desktop-wallpaper-matrix-miscellanea-miscellaneous-numbers-binary-code.jpg)`, background: 'cover', backgroundPosition: '152%' }}>
      <div className="flex justify-between h-16 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-white font-semibold text-lg ml-11"></span>
          </div>
          <div className="hidden md:block">
            <div className="ml-1 flex items-baseline space-x-4">
              <Link className="text-white-300 hover:text-emerald-600 px-4 py-2 text-md font-bold" href="/">
                Home
              </Link>
              <Link className="text-white-300 hover:text-emerald-600 px-3 py-2 text-md font-bold" href="#About">
                About Me
              </Link>
              <Link className="text-white-300 hover:text-emerald-600 px-3 py-2 text-md font-bold" href="#Projects">
                Projects
              </Link>
              <Link className="text-white-300 hover:text-emerald-600 px-3 py-2 text-md font-bold" href="#Skills">
                Skills
              </Link>
              <a
                href="#Contacts"
                className="text-white-300 hover:text-emerald-600 px-3 py-2 text-md font-bold"
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
