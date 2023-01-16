import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Areacard from './Areacard';
import AreaDetails from './AreaDetails';

const Nestedarea = ({nested}) => {


  

    const [categories,setCategories]=useState([]);

    // useEffect(()=>{
    //     fetch('https://d-azure.vercel.app/townschool')
    //     .then(res=>res.json())
    //     .then(data=>setCategories(data))
        
        
    //         },
    //         [])
    
    const data = [1, 2, 3, 3, 4, 4, 5];
    const uniqueValues = Array.from(new Set(data));
  

    const propsArray = Object.values(nested);
    const uniqueProps = propsArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    return (
        <div>


       


       <button className="btn btn-primary m-2 flex  "><Link to={`/aread/${nested._id}`} >{nested.city}</Link></button>
   

        </div>
    );
};

export default Nestedarea;