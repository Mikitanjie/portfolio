import Link from 'next/link';

const Button = () => {
  return (
    <button type="button" className="inline-flex justify-center rounded-md bg-black
    px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-emerald-600
    hover:bg-indigo-700	 focus:outline-offset-0" >
      <Link href="mailto:cataniamike16@gmail.com" passHref>
      <div className="text-green-400">
        Contact me
      </div>
      </Link>
    </button>
  )
}

export default Button;
