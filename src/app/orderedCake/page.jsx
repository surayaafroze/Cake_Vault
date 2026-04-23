'use client'

import CakeCard from '@/component/allCakes/CakeCard';
import { buttonContext } from '@/providers/Providers';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
const OrderedCake = () => {
const {order,setOrder} =useContext(buttonContext)

const deleteHandle =(cake)=>{
  const filterCake=order.filter((iCake)=>iCake.id!=cake.id)
  setOrder(filterCake)
  toast.warning( `${cake.name} is uninstalled`)
}
  return (
    <div className=' bg-[#ff66a3] min-h-screen'>
      
 <div className='max-w-7xl mx-auto pt-6 pb-15'>
  <div className=' flex flex-col gap-4 '>
        {order.map((cake,i)=><div 
        key={i}
        className=' bg-[#fac8eb]  p-5 rounded-2xl '
        >
       <div className='flex justify-between items-center'>
<div className='flex gap-4 items-center'>
        <div>
          <Image
          className='rounded-2xl'
          src={cake.picture}
          alt={cake.name}
          width={100}
          height={50}
          ></Image>
        </div>
        <div>
          <h2 className='text-3xl font-bold text-[#ff66a3]'>{cake.name}</h2>
<p className='font-bold'>BDT {cake.price}</p>
        </div>
       </div>

        <div><button className='btn bg-red-500 text-white' onClick={()=>deleteHandle(cake)}>delete</button></div>
       </div>


        </div>)}
      </div>
 </div>
     
     
    </div>
  );
};

export default OrderedCake;