import { useState, useContext, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../../_components/ThemeContext/ThemeContext';

const Languages = () => {
  const { theme } = useContext(ThemeContext);
  const [popupMessage, setPopupMessage] = useState("");
  const popupTimeout = useRef(null);

  const handleClick = (message) => {
    setPopupMessage(message);
    if (popupTimeout.current) clearTimeout(popupTimeout.current);

    popupTimeout.current = setTimeout(() => {
      setPopupMessage("");
    }, 6000);
  };

  const handlePopupClose = () => setPopupMessage("");

  useEffect(() => {
    return () => {
      if (popupTimeout.current) clearTimeout(popupTimeout.current);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full px-4 py-10">

      {popupMessage && (
        <div
          className="
            absolute
            top-full
            left-1/2
            transform
            -translate-x-1/2
            mt-6
            text-center
            p-4
            rounded-lg
            bg-transparent
            animate-[pop_0.4s_ease-out]
            w-[280px]
            sm:w-[320px]
          "
          style={{ color: theme === 'light' ? 'black' : '#01a123' }}
        >
          <style jsx>{`
            @keyframes pop {
              0% { transform: scale(0) translateX(-50%); }
              100% { transform: scale(1) translateX(-50%); }
            }
          `}</style>

          <button
            className="float-right active:scale-75"
            onClick={handlePopupClose}
            style={{ color: theme === 'light' ? 'black' : 'rgb(5, 150, 105)' }}
          >
            X
          </button>

          <p className="text-xl sm:text-2xl">{popupMessage}</p>
        </div>
      )}

      <div
        className="
          grid
          mx-auto
          grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
          gap-8
          place-items-center
          w-full
          max-w-5xl
        "
      >

        <div className="text-center animate-pulse hover:animate-none">
          <div onClick={() => handleClick("Portuguese is my mother-tongue!")}>
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-90"
              src="https://cdn-icons-png.flaticon.com/128/321/321256.png"
              alt="Portuguese"
              width={90}
              height={90}
            />
          </div>
          <span style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
            Portuguese
          </span>
        </div>

        <div className="text-center animate-pulse hover:animate-none">
          <div onClick={() => handleClick("This is the language I use every day at home - my girlfriend is Italian!")}>
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-90"
              src="https://cdn-icons-png.flaticon.com/128/321/321240.png"
              alt="Italian"
              width={90}
              height={90}
            />
          </div>
          <span style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
            Italian
          </span>
        </div>

        <div className="text-center animate-pulse hover:animate-none">
          <div onClick={() => handleClick("This is the first foreign language that I have learnt!")}>
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-90"
              src="https://cdn-icons-png.flaticon.com/128/321/321233.png"
              alt="German"
              width={90}
              height={90}
            />
          </div>
          <span style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
            German
          </span>
        </div>

        <div className="text-center animate-pulse hover:animate-none">
          <div onClick={() => handleClick("Living near the border with Spain and having friends there has taught me that!")}>
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-90"
              src="https://cdn-icons-png.flaticon.com/128/321/321260.png"
              alt="Spanish"
              width={90}
              height={90}
            />
          </div>
          <span style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
            Spanish
          </span>
        </div>

        <div className="text-center animate-pulse hover:animate-none">
          <div onClick={() => handleClick("This is the language I learnt at school and which has improved with time in the UK!")}>
            <Image
              className="transition-transform duration-200 hover:scale-125 active:scale-90"
              src="https://cdn-icons-png.flaticon.com/128/321/321269.png"
              alt="English"
              width={90}
              height={90}
            />
          </div>
          <span style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
            English
          </span>
        </div>

      </div>
    </div>
  );
};

export default Languages;
