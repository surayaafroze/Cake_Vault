import Image from 'next/image';
import React from 'react';

const CakeCard = ({cake}) => {
  const {name,category,price,rating,picture}=cake
  return (
    <div className='bg-[#f6dcee] rounded-2xl p-6'>
      <div className='flex justify-center items-center'>  <Image
        className=' mt-2 '
        src={picture}
        alt={name}
        width={100}
        height={100}
        >

        </Image>
        </div>
      <div>
        <h2>hello</h2>
      </div>
    </div>
  );
};

export default CakeCard;