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
      <div className=" ">
    
      {/* <FeaturesSchool></FeaturesSchool> */}
      <section className="hand">
        {/* part */}
        {/* {
          d &&
          <> ss {d.school}
          </>
        } */}
        <div className=" grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3 gap-6 glass">
          {
            categories.map(name => <Areacard name={name}></Areacard>)
          }
        </div>
      </section>
    </div>
    

    );
};

export default School;