import React from 'react';
import { AiFillFire } from "react-icons/ai";

const Facts = () => {
  return (
    <div className='relative'>
    <div className='absolute top-0 right-0 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 w-[230px] h-[230px] mt-10 mr-10 pt-3 pl-3 rounded-lg hover:scale-110 ease-in-out duration-300'>
    <h1 className='flex items-center font-bold text-white/70'>
        <AiFillFire className='mr-2' /> Generative AI
        </h1>
        <p className='text-white/50 mt-5'>
          Generative AI refers to a category of artificial intelligence algorithms that can generate new data or content resembling a given dataset.
        </p>
      </div>

      <div className='absolute top-[275px] right-0 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 w-[230px] h-[230px] mt-10 mr-10 pt-3 pl-3 rounded-lg hover:scale-110 ease-in-out duration-300'>
      <h1 className='flex items-center font-bold text-white/70'>
        <AiFillFire className='mr-2' /> Machine Learning
        </h1>
        <p className='text-white/50 mt-5'>
        Machine learning is a branch of artificial intelligence that enables systems to learn from data and improve their performance without being explicitly programmed
        </p>
      </div>
    </div>
  );
}

export default Facts;
