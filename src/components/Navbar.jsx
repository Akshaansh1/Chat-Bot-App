import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 p-10'>
      <h1 className='w-full text-5xl font-bold text-[#0FA4AF]'>CHAT-BUDDY</h1>
      <p className='text-3xl font-bold text-[#afdde5] mt-5'>What To Ask ??</p>
      <div className='text-2xl font-bold text-[#0FA4AF] mt-5'>
        Ask
        <Typewriter
          words={[' About Programming', ' About Personalities', ' About Codes', ' ,Its upto you!!']}
          loop={0}
        />
      </div>
    </div>
  );
}

export default Navbar;
