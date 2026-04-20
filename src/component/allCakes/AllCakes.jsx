import React from 'react';
import CakeCard from './CakeCard';


// const CakesFetch =async()=> {
// const res =await fetch('http://localhost:5000/cake');
// const cakes = await res.json()
// }

const AllCakes =async () => {
 const res =await fetch('http://localhost:3000/data.json');
 const cakes = await res.json()
  return (
    <div>
   <div className='max-w-7xl mx-auto'>
    <h2>Very Delicious Cake Recommendation Pol</h2>

   <div className='grid grid-cols-4 justify-center items-center gap-5 '>
    {cakes.map (cake=> <CakeCard 
    key={cake.id}
    cake={cake}
    >

    </CakeCard>)}
   </div>
   </div>
    </div>
  );
};

export default AllCakes;