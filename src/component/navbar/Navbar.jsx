import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-[#ffe6f3]'>
    <div className='flex justify-between items-center p-5 px-10 mx-auto'>
       <div>
      <h1 className='text-2xl font-bold'>CakeVault</h1>
     </div >
    <div className='flex justify-between items-center gap-8'>
       <Link href='/'>Home</Link>
     <Link href='/cakes'>Cakes</Link>
     <Link href='/orderedCake'>Ordered Cake</Link>
    </div>
    </div>
     
    </div>
  );
};

export default Navbar;