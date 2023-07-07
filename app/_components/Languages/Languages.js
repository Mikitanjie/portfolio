import Image from 'next/image';

const Languages = () => {
  return (
    <div nopadding style={{ display: 'flex', marginBottom: '100px', marginTop:'-250px' }}>
      <div style={{ marginRight: '25px', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px' }}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/321/321256.png"
            alt="Portuguese"
            width={60}
            height={60}
          />
        </div>
        <span>Portuguese</span>
      </div>
      <div style={{ marginRight: '50px', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px' }}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/321/321240.png"
            alt="Italian"
            width={60}
            height={60}
          />
        </div>
        <span>Italian</span>
      </div>
      <div style={{ marginRight: '50px', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px' }}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/321/321233.png"
            alt="German"
            width={60}
            height={60}
          />
        </div>
        <span>German</span>
      </div>
      <div style={{ marginRight: '50px', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px' }}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/321/321260.png"
            alt="Spanish"
            width={60}
            height={60}
          />
        </div>
        <span>Spanish</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px' }}>
          <Image
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
