import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Area from './Area';
import Areacard from './Areacard';
import CardDetail from './CardDetail';
import TownSchool from './TownSchool';
import './School.css'
import Ads from '../Ads/Ads';
import FeaturesSchool from '../SearchSchool/FeaturesSchool';

const School = ({d}) => {

 

  
    const [areacategories,setareaCategories]=useState([]);
    const [categories,setCategories]=useState([]);
   

    useEffect(()=>{
        fetch('https://d-azure.vercel.app/townschool')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        
        
            },
            [])

            // area

            useEffect(()=>{
                fetch('https://d-azure.vercel.app/areaschool')
                .then(res=>res.json())
                .then(data=>setareaCategories(data))
                
                
                    },
                    [])

                    // const un= "city"
                    // const uniq= [...new Map(categories.map(cat=> [cat[un],cat]  )).values()]
        
        
    return (
      <div >
  {/* <FeaturesSchool></FeaturesSchool> */}
 
<section className='hand'>
{/* part */}
{/* {
  d &&
  <> ss {d.school}
  </>


} */}
<div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3  gap-6 glass   '>
    



    {
    
        categories.map(name=>  <Areacard name={name}  ></Areacard>)
    }

    
    {
        categories.map(title=>  <h1 key={title._id}> 
       
    
       {/* area start */}
          
          
        
    
    
    
    
    
     
      
                
       {/* // down card */}
        {/* <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20">
      <figure><img className='h-40' src={title.logo} alt={title.category} /></figure>
      <div className="card-body">
      
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
           
          <button className="btn btn-primary"><Link to={`/title/${title._id}`} >Details</Link></button>
        </div>
      </div>
    </div> */}
    
       {/* // card end */}
      
    
    
    
    
    
        </h1>  )
       
    
    }  
    
    
          </div>
        <div className=''>
  {/* <Ads></Ads> pt-12 ml-2*/}
        </div>
      </section>

      </div>
    );
};

export default School;