import Image from 'next/image';

const Languages = () => {
  return (
    <div style={{ display: 'flex', marginBottom: '715px', marginTop:'-250px', marginLeft: '40px' }}>
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.2s', marginRight: '25px', textAlign: 'center' }}>
        <div style={{width: '60px', height: '60px' }}>
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
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.4s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px' }}>
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
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.6s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px' }}>
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
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '0.8s', marginRight: '50px', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px' }}>
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
      <div className="animate-pulse hover:animate-none" style={{animationDelay: '1.0s', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px' }}>
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
