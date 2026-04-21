import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CakeCard = ({cake}) => {
  const {name,category,price,rating,picture}=cake
  return (
    <div className=' rounded-2xl p-6 w-[350px] h-[400px]  bg-[#fac8eb] flex flex-col flex-1 justify-center items-center space-y-6 shadow-2xl'>
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
        <Link href={`/cakeDetails/${cake.id}`}><button className='btn bg-[#ff66a3] mt-4 text-white'>Show Details</button></Link>
      </div>
    </div>
  );
};

export default CakeCard;