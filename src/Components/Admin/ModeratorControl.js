import React, { useEffect, useState } from 'react';
import UserShow from './UserShow';

const ModeratorControl = () => {
   const [user,setUser] =useState([])

      
    useEffect(()=>{
        fetch('https://d-azure.vercel.app/getAllUser')
        .then(res=>res.json())
        .then(data=>setUser(data))
        
        
            },
            [])

    return (
        <div>
            <h2 className='text-2xl mt-12 text-left ml-4 font-bold'>Recent user </h2>
            <h2 className='text-2xl mt-12 text-left ml-4 font-bold'> </h2>


         {
            user.map((d,i)=> <h1>   <UserShow d={d} i={i+1}></UserShow>
            
              
              </h1>
            
            )
           
           }

        </div>
    );
};

export default ModeratorControl;