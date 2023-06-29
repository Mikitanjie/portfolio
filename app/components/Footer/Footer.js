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
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Contacts</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline"></a>
                      </li>
                      <li>
                        <Link href="mailto: cataniamike16gmail.com">
                          <MdEmail size="3rem" className="hover:underline"/>
                        </Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                    <Link href="https://github.com/Mikitanjie" target='_blank'>
                      <AiFillGithub size="3rem" className="hover:underline"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/mc16/" target='_blank'>
                      <AiFillLinkedin size="3rem" className="hover:underline"/>
                    </Link>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Call Me</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="tel:+393534440733">
                            <AiFillPhone size="3rem"/>
                          </Link>
                      </li>
                      <li>
                          <a href="#" className="hover:underline"></a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          </div>
      </div>
    </div>
</footer>
  )
}
export default Footer;
