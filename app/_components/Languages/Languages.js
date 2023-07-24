import { useState, useContext, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../../_components/ThemeContext/ThemeContext';

const Languages = () => {
  const { theme } = useContext(ThemeContext);
  const [popupMessage, setPopupMessage] = useState("");
  const popupTimeout = useRef(null);

  const handleClick = (message) => {
    setPopupMessage(message);

    // Clear any existing timeouts to ensure we don't have multiple timeouts running at once
    if (popupTimeout.current) {
      clearTimeout(popupTimeout.current);
    }

    // Set a new timeout
    popupTimeout.current = setTimeout(() => {
      setPopupMessage("");
    }, 4000); // 5000 milliseconds = 5 seconds
  };

  const handlePopupClose = () => {
    setPopupMessage("");
  };

  // Clear the timeout when the component unmounts to prevent memory leaks
  useEffect(() => {
    return () => {
      if (popupTimeout.current) {
        clearTimeout(popupTimeout.current);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', display: 'flex', marginBottom: '420px', marginTop: '-135px', marginLeft: '480px'}}>
      {popupMessage &&
        <div style={{
          position: 'absolute',
          top: '300%',
          left: '19%',
          transform: 'translate(-50%, -50%)',
          background: theme === 'light' ? 'transparent' : 'transparent',
          color: theme === 'light' ? 'black' : 'rgb(5, 150, 105)',
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
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.2s', marginRight: '25px', textAlign: 'center' }}>
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("I speak Portuguese as my Mother-language!")}>
          <Image
            className="active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321256.png"
            alt="Portuguese"
            width={60}
            height={60}
          />
        </div>
        <span className={theme === 'light' ? 'text-black' : 'text-emerald-600'}>Portuguese</span>
      </div>

      {/* Italian */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.4s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("Italian comes from my Father and also my GF!")}>
          <Image
            className="active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321240.png"
            alt="Italian"
            width={60}
            height={60}
          />
        </div>
        <span className={theme === 'light' ? 'text-black' : 'text-emerald-600'}>Italian</span>
      </div>

      {/* German */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.6s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("I was born in Germany and lived there a few years!")}>
          <Image
            className="active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321233.png"
            alt="German"
            width={60}
            height={60}
          />
        </div>
        <span className={theme === 'light' ? 'text-black' : 'text-emerald-600'}>German</span>
      </div>

      {/* Spanish */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.8s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("I learned Spanish as we are very close neighbors and also with friends")}>
          <Image
            className="active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321260.png"
            alt="Spanish"
            width={60}
            height={60}
          />
        </div>
        <span className={theme === 'light' ? 'text-black' : 'text-emerald-600'}>Spanish</span>
      </div>

      {/* English */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '1.0s', textAlign: 'center' }}>
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("while living in UK for 3 years I could improve my English quite alot :)")}>
          <Image
            className="active:scale-90 transition-transform duration-200 hover:scale-150"
            src="https://cdn-icons-png.flaticon.com/128/321/321269.png"
            alt="English"
            width={60}
            height={60}
          />
        </div>
        <span className={theme === 'light' ? 'text-black' : 'text-emerald-600'}>English</span>
      </div>
    </div>
  );
};

export default Languages;
