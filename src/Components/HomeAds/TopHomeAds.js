import React, { useEffect, useState } from 'react';
import { RiH1 } from 'react-icons/ri';

const TopHomeAds = () => {

    const [ads,setads]=useState([]);
 

  useEffect(()=>{
    fetch('https://d-azure.vercel.app/gethomeads')
    
    .then(res=>res.json())
    .then(data=>setads(data))
          
    
        },
        
        [])
        console.log('ads',ads)
    return (
        <div className=' border'>
           
            <p style={{ height: '5vh', width: '100%', overflow: 'auto', }}  className=' bg-[#4FD1C5] text-white text-justify hover:underline  p-1 '>
       
           {ads.map(d=><h1>
            <a className='p-4' href={d.toplink}>{d.toplink}</a>
           </h1> )}
             </p>

             {/* <p style={{ height: '8vh', width: '100%', overflow: 'auto', }}  className='text-justify p-2 border   '>
           
             {ads.map(d=><h1>
            {d.toptext}
           </h1> )}
             </p> */}
        </div>
    );
};

export default TopHomeAds;