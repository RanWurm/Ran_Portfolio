import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="w-3/4 justify-center z-40">
      <Image 
        src="/chiko.png" 
        alt="hero" 
        width={600} // Larger size for bigger screens
        height={600} 
        className="object-contain"
        style={{ zIndex: 0 }}
      />
    </div>
  );
};

export default Avatar;
