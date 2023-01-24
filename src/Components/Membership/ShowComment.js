import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import FshowComment from './FshowComment';


const ShowComment = ({d}) => {



//extra code





//extra code for rating recieve

   
    const [showcomment,setshowcomment]=useState([]);
 
    
    useEffect(()=>{
      fetch(`https://d-azure.vercel.app/getcomment?combine=${d?.combine}`)
      
      .then(res=>res.json())
      .then(data=>setshowcomment(data))
    
            
      
          },
          
          [])
          

          const sum = showcomment.map(item => parseFloat(item.rating)).reduce((acc, val) => acc + val, 0);
          const average = sum / showcomment.length;
          console.log('avg',average); 
          console.log('length',showcomment.length); 
          console.log('sum',sum); 
          const reviews =showcomment.length;
          const ratings = Math.round(average);
          console.log('ratings',ratings)

      
    // extra code or rating
    return (
        <div>
         {/* shoow comment */}
         <section className='grid lg:grid-cols-1 sm:grid-cols-1'>
{


showcomment.map((numbers)=> 



   

    <FshowComment numbers={numbers}></FshowComment>



)
}



  


            </section>

  
     
       
        </div>
    );
};

export default ShowComment;