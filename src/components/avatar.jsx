import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="w-3/4 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[70%] xl:max-w-full 
                    justify-center z-40 lg:translate-y-8 
                    -translate-x-8 sm:-translate-x-8 md:-translate-x-12 lg:translate-x-10">
      <Image 
        src="/chiko.png" 
        alt="hero" 
        width={800}
        height={800} 
        className="object-contain w-full h-auto"
        priority
      />
    </div>
  );
};

export default Avatar;