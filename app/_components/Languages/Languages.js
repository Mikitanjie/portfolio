import { useState, useContext, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../../_components/ThemeContext/ThemeContext';

const Languages = () => {
  const { theme } = useContext(ThemeContext);
  const [popupMessage, setPopupMessage] = useState("");
  const popupTimeout = useRef(null);

  const handleClick = (message) => {
    setPopupMessage(message);

    if (popupTimeout.current) {
      clearTimeout(popupTimeout.current);
    }

    popupTimeout.current = setTimeout(() => {
      setPopupMessage("");
    }, 6000);
  };

  const handlePopupClose = () => {
    setPopupMessage("");
  };

  useEffect(() => {
    return () => {
      if (popupTimeout.current) {
        clearTimeout(popupTimeout.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center" style={{ position: 'relative', display: 'flex', marginBottom: '420px'}}>
      {popupMessage &&
        <div style={{
          position: 'absolute',
          top: '300%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: theme === 'light' ? 'transparent' : 'transparent',
          color: theme === 'light' ? 'black' : '#01a123',
          width: '300px',
          textAlign: 'center',
          animation: 'pop 2.3s ease-out',
        }}>
          <style jsx>{`
            @keyframes pop {
              0% {
                transform: translate(-50%, -50%) scale(0);
              }
              100% {
                transform: translate(-50%, -50%) scale(1);
              }
            }
          `}</style>
          <button className="lighting-effect active:scale-50" onClick={handlePopupClose} style={{ float: 'right', color: theme === 'light' ? 'black' : 'rgb(5, 150, 105)' }}>X</button>
          <p style={{ fontSize: '40px'}}>{popupMessage}</p>
        </div>
      }

      {/* Portuguese */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.2s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{width: '100px', height: '100px' }} onClick={() => handleClick("Portuguese is my mother-tongue!")}>
          <Image
            className=" active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321256.png"
            alt="Portuguese"
            width={100}
            height={100}
          />
        </div>
        <span
          style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
          Portuguese
        </span>
      </div>

      {/* Italian */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.4s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{width: '100px', height: '100px' }} onClick={() => handleClick("This is the language I use every day at home - my girlfriend is Italian!")}>
          <Image
            className="active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321240.png"
            alt="Italian"
            width={100}
            height={100}
          />
        </div>
        <span
            style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
            Italian
          </span>
      </div>

      {/* German */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.6s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{width: '100px', height: '100px' }} onClick={() => handleClick("This is the first foreign language that I have learnt!")}>
          <Image
            className="active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321233.png"
            alt="German"
            width={100}
            height={100}
          />
        </div>
        <span
            style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
            German
          </span>
      </div>

      {/* Spanish */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.8s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{width: '100px', height: '100px' }} onClick={() => handleClick("Living near the border with Spain and having friends there has taught me that!")}>
          <Image
            className="active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321260.png"
            alt="Spanish"
            width={100}
            height={100}
          />
        </div>
        <span
            style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
            Spanish
          </span>
      </div>

      {/* English */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '1.0s', textAlign: 'center' }}>
        <div style={{width: '100px', height: '100px' }} onClick={() => handleClick("This is the language I learnt at school and which has improved with time in the UK!")}>
          <Image
            className="active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321269.png"
            alt="English"
            width={100}
            height={100}
          />
        </div>
        <span
            style={{ color: theme === 'light' ? 'black' : '#01a123' }}>
            English
          </span>
      </div>
    </div>
  );
};

export default Languages;
