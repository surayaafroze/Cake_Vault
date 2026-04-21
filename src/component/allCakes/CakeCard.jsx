import Image from 'next/image';
import React from 'react';

const CakeCard = ({cake}) => {
  const {name,category,price,rating,picture}=cake
  return (
    <div className=' rounded-2xl p-6 w-[400px] h-[300px]  bg-[#fac8eb] flex flex-col justify-center items-center space-y-6'>
      <div className='flex justify-center items-center'>  <Image
        className=' mt-2 rounded-2xl '
        src={picture}
        alt={name}
        width={120}
        height={1}
        >

        </Image>
        </div>
      <div>
        <h2 className='font-bold text-[#150d10]'>{name}</h2>
        <p>{category}</p>
        <p>Price:BDT {price}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default CakeCard;