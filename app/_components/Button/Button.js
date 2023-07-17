import Link from 'next/link';

const Button = () => {
  return (
    <button type="button" className="inline-flex justify-center rounded-lg bg-black px-4 py-2 shadow-sm ring-1 ring-inset ring-emerald-600 hover:bg-emerald-700 focus:outline-offset-0">
      <a href="mailto:cataniamike16@gmail.com" className="text-green-400">
        Contact me
      </a>
    </button>
  );
};

export default Button;
