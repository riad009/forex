import React, { useEffect, useState } from 'react';
import ShowRankSchool from './ShowRankSchool';

const RankSchoo = () => {

    const [rank , setrank]= useState([])
console.log('ccccc')
   
useEffect(()=>{
    fetch('https://d-azure.vercel.app/areaschool')
    
    .then(res=>res.json())
    .then(data=>setrank(data))
          
    
        },
        
        [])
        const top = rank.filter(item => item.rank == 'yes');
    console.log('fffffffffff',top);
 
         
           
    return (
        <div className='hand grid lg:grid-cols-3 sm:grid-cols-1'>
           {
             top.map(d=> <h1>
               <ShowRankSchool d={d}></ShowRankSchool>

             </h1>)


           }
        </div>
    );
};

export default RankSchoo;