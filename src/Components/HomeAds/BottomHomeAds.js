import React, { useEffect, useState } from 'react';
import { RiH1 } from 'react-icons/ri';

const BottomHomeAds = () => {

    const [ads,setads]=useState([]);
 

  useEffect(()=>{
    fetch('https://d-azure.vercel.app/gethomeads')
    
    .then(res=>res.json())
    .then(data=>setads(data))
          
    
        },
        
        [])
        console.log('ads',ads)
    return (
        <div className=' border m-2'>
           
            <p style={{ height: '5vh', width: '100%', overflow: 'auto', }}  className=' bg-[#4FD1C5] text-white text-justify hover:underline  p-1 '>
       
           {ads.map(d=><h1>
            <a className='p-4' href={d.bottomlink}>{d.bottomlink}</a>
           </h1> )}
             </p>

             {/* <p style={{ height: '25vh', width: '100%', overflow: 'auto', }}  className='text-justify p-2 border   '>
           
             {ads.map(d=><h1>
            {d.bottomtext}
           </h1> )}
             </p> */}
        </div>
    );
};

export default BottomHomeAds;