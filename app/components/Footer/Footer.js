import { AiFillGithub, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Get in touch</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-7 text-sm font-semibold text-gray-900 uppercase dark:text-white">Email</h2>
              <ul className="dark:text-gray-100 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline"></a>
                </li>
                <li>
                  <Link href="mailto: cataniamike16gmail.com">
                    <MdEmail size="3rem" className="hover:underline" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-7 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
              <div className="flex gap-4">
                <Link href="https://github.com/Mikitanjie" target="_blank">
                  <AiFillGithub size="3rem" className=" mr-3 hover:underline" />
                </Link>
                <Link href="https://www.linkedin.com/in/mc16/" target="_blank">
                  <AiFillLinkedin size="3rem" className="hover:underline" />
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-7 text-sm font-semibold text-gray-900 uppercase dark:text-white">Call Me</h2>
              <ul className="dark:text-gray-100 font-medium">
                <li className="mb-4">
                  <Link href="tel:+393534440733">
                    <AiFillPhone size="3rem" />
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:underline"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center items-center">
          <span className="text-sm text-gray-400">© 2023 All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
