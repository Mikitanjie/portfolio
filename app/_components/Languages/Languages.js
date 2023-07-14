import Image from 'next/image';
import { useState } from 'react';

const Languages = () => {
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
        <div style={{ position: 'absolute', top: '-100px', left: '100px', background: 'rgb(0, 0, 0)', padding: '10px', borderRadius: '5px' }}>
          <button onClick={handlePopupClose} style={{ float: 'right' }}>X</button>
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
        <span>Portuguese</span>
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
        <span>Italian</span>
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
        <span>German</span>
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
        <span>Spanish</span>
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
        <span>English</span>
      </div>
    </div>
  );
};

export default Languages;
