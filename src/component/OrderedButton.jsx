'use client'

import { buttonContext } from '@/providers/Providers';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const OrderedButton = ({cake}) => {
  const {order,setOrder} =useContext(buttonContext)

const handelar =()=>{
setOrder([...order,cake])
toast.success(`${cake.name} has confirmed order`)
console.log(setOrder)
}
  
  return (
    <div>
       <div className='flex justify-center items-center mt-20'><button className='btn bg-[#fcd6e5] text-[#ff66a3] font-extrabold p-5 shadow'onClick={handelar} >Order Now</button></div>
    </div>
  );
};

export default OrderedButton;