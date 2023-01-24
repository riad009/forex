import React, { useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Article from '../article/Article';
import Silver from '../Membership/Silver';
import Show from './Show';

const SchoolPage = (props) => {
   
 
    const [cart,setCart]=useState([])

    const navigate=useNavigate()
     
   
    const detail = useLoaderData()
    const un= "school"
    const uniq= [...new Map(detail.map(cat=> [cat[un],cat]  )).values()]

    
    return (
        <div className='mb-12 '>
            
           <div className='pt-12 colorBlue '>
  
           </div>

            {

uniq.map(d=>   <Show  d={d}  ></Show> )
            }

          {/* {

            cart.map(c=> <h1>{c.students} {c.school}</h1>)
          } */}
       
            <Article></Article>
        </div>
    );
};

export default SchoolPage;