import Image from 'next/image';
import { useState,useContext } from 'react';
import { ThemeContext } from '../../_components/ThemeContext/ThemeContext';


const Languages = () => {
  const { theme } = useContext(ThemeContext);

  const [popupMessage, setPopupMessage] = useState("");

  const handleClick = (message) => {
    setPopupMessage(message);
  };

  const handlePopupClose = () => {
    setPopupMessage("");
  };

  return (
    <div style={{ position: 'relative', display: 'flex', marginBottom: '715px', marginTop:'-250px', marginLeft: '40px' }}>
    {popupMessage &&
      <div style={{
        position: 'absolute',
        top: '-150%', // Position at 50% from the top
        left: '50%', // Position at 50% from the left
        transform: 'translate(-50%, -50%)', // This will center the popup
        background: theme === 'light' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)', // black background for light theme, white for dark theme
        padding: '10px',
        borderRadius: '5px',
        color: theme === 'light' ? 'white' : 'black', // white text for light theme, black for dark theme
        width: '300px', // Set a fixed width for the popup
        textAlign: 'center', // Center the text
      }}>
        <button onClick={handlePopupClose} style={{ float: 'right', color: theme === 'light' ? 'white' : 'black' }}>X</button>
        <p>{popupMessage}</p>
      </div>
      }

      {/* Portuguese */}
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.2s', marginRight: '25px', textAlign: 'center' }}>
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("Olá, eu sou o Michael!")}>
          <Image
            className="transition-transform duration-200 hover:scale-150"
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
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("Ciao, sono Michael")}>
          <Image
            className="transition-transform duration-200 hover:scale-150"
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
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("Hallo, Ich bin Michael")}>
          <Image
            className="transition-transform duration-200 hover:scale-150"
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
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("Ola,Mi nombre es Michael")}>
          <Image
            className="transition-transform duration-200 hover:scale-150"
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
        <div style={{width: '60px', height: '60px' }} onClick={() => handleClick("Hi there, I'm Michael")}>
          <Image
            className="transition-transform duration-200 hover:scale-150"
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
