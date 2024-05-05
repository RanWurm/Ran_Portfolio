import Image from 'next/image';


const Avatar = () => {
  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
      {/* PARTICLES - Using inline style for full width, height, and z-index control */}
      <Image src="/hero.png" alt="hero" fill
      unoptimized
      className="object-contain" style={{ zIndex: 1 }} />
    </div>
  );
};

export default Avatar;
