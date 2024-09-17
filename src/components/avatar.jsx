import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <Image 
        src="/chiko.png" 
        alt="hero" 
        width={600} // Larger size for bigger screens
        height={600} 
        className="object-contain"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default Avatar;
