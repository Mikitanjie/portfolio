import { AiFillGithub, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer id="Contacts" className="dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center">
              <span
                className="self-center text-2xl font-semibold whitespace-nowrap"
                style={{ color: theme === 'light' ? 'white' : 'rgb(52, 211, 153)' }}
              >
                Get in touch
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-7 ml-11 text-sm font-semibold uppercase dark:text-white">Email</h2>
              <ul className="ml-11 dark:text-gray-100 hover:text-emerald-600 font-medium">
                <li className="mb-4">
                  <a href="mailto:cataniamike16@gmail.com">
                    <MdEmail size="3rem" className="active:scale-50" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-7 ml-4 text-sm font-semibold uppercase dark:text-gray-100">Follow me</h2>
              <div className="flex gap-4 dark:text-gray-100 ">
                <Link href="https://github.com/Mikitanjie" target="_blank" passHref>
                  <AiFillGithub size="3rem" className="active:scale-50 hover:text-emerald-600" />
                </Link>
                <Link href="https://www.linkedin.com/in/mc16/" target="_blank" passHref>
                  <AiFillLinkedin size="3rem" className="active:scale-50 hover:text-emerald-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="animate-pulse sm:mx-auto dark:border-emerald-600 lg:my-8" />
        <div className="flex justify-center items-center">
          <span className="text-sm text-emerald-600">© 2023 Michael Catania</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
