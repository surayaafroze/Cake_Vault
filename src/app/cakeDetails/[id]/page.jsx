

import Image from 'next/image';
import React from 'react';

const page =async ({params}) => {
  const {id} = await params
  // 
  const res =await fetch('http://localhost:3000/data.json');
 const cakes = await res.json()

const cake = cakes.find(cake => cake.id === parseInt(id));
 const {name,picture,ingredients,description} =cake;
 if (!cake) {
  return <div>Not found</div>;
}
  return (
    <div  className='min-h-screen bg-[#ff66a3] pt-10 pb-10 '>
     <div className='max-w-7xl mx-auto grid grid-cols-2 justify-center items-center gap-5'>
       <div>
        <div >
       <Image
        className='rounded-2xl'
        src={picture}
        alt={name}
        width={450}
        height={450}
        ></Image>
      </div>
       
       </div>
    <div>
        <h1 className='text-4xl font-bold'>{name}</h1>
        <p className='bg-[#ffc2da] p-8 rounded-2xl mt-6'>{description}</p>
        <div>
           <h2 className='text-3xl font-bold pt-6 pb-6' >Ingredients</h2>
        <div className='flex flex-wrap gap-3'>
     
        {ingredients.map((ingredient,ind)=> <div
        key={ind}
        className=' flex items-center justify-center'
        >
          <li className='list-none px-6 py-4 bg-[#ffc2da]'>{ingredient}</li>
        </div>)}
      </div>
      </div>
       <div className='flex justify-center items-center mt-20'><button className='btn bg-[#fcd6e5] text-[#ff66a3] font-extrabold p-5 shadow' >Order Now</button></div>
    </div>
    
     </div>
    </div>
  );
};

export default page;