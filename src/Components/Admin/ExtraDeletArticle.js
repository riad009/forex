import React, { useEffect, useState } from 'react';
import DeleteArticle from '../Admin/DeleteArticle';

const ExtraDeleteArticle = () => {
    const [Deletearticle,setDeletearticle]=useState([]);

     //
  useEffect(()=>{
    fetch('https://d-azure.vercel.app/allarticle')
    
    .then(res=>res.json())
    .then(data=>setDeletearticle(data))
          
    
        },
        
        [])
    return (
        <div>
             
      

<section>


<section className='flex'>

<div className="alert shadow-lg mb-4">
  <div>
      <span className='text-blue-700 font-bold text-xl'>Delete Article </span>
       </div>
  
</div>

</section>

<div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  
{


Deletearticle.map(d=>  <DeleteArticle d={d}></DeleteArticle>)
       }

</div>
</section>
        </div>
    );
};

export default ExtraDeleteArticle;