import Image from 'next/image';


const Languages = () => {
  return(
    <div>
      <div></div>
      <header>Languages</header>
      <div className="animate-pulse" style={{ animationDelay: '0.4s' }}>
          <div style={{ width: '60px', height: '60px' }}>
            <Image
              src= ""
              alt=""
              width={60}
              height={60}
            />
          </div>
        </div>
    </div>
  )
}

export default Languages
