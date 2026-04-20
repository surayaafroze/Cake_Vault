import Image from 'next/image';
import React from 'react';
import myCake from '@/assets/image.png'
const Banner = () => {
  return (
    <div className='bg-[#f6dcee]'>
  <div className='grid grid-cols-2 gap-5 justify-center items-center'>
    <div>
      <h1 className='text-4xl font-bold text-[#ff66a3]'>We Provide various 
    types of Cakes That Are Very Delicious And Beautiful</h1>

    <p className='text-[#11101080]'>There are many types of cakes that you can choose from, ranging from small cakes to large ones and produced with the best secret reipe</p>

    <button className='btn bg-[#ff66a3]'>Oredr Now</button>
    <button className='btn'>Learn More</button>
    </div>
    <div>
      <Image 
      src={myCake}
      alt='Cake'
      width={400}
      height={400}
      ></Image>
    </div>
  </div>
    </div>
  );
};

export default Banner;