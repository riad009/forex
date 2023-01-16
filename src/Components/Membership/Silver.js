import React, { useState } from 'react';

import Article from '../article/Article';
import './Silver.css'
import '../SchoolPage/Show.css'

import {Link} from "react-scroll";
import { GrCompare } from 'react-icons/gr';
import { GiSelfLove } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import School from '../School/School';
const Silver = ({d}) => {
  
    const navigate=useNavigate()
    // const handdleCompare=()=>{
    //     setTimeout(()=>{
    //         toast.info(`choice a school for compare`, {
    //             position: "top-right",
    //             autoClose: 7000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             // theme: "colored",
    //             }); 
    //         },1500)
     
    //     navigate('/school')

    // }
  

       const menuItem =[

        
  {

id: 1,
title : 'home'

  },
  {

id: 2,
title : 'middle'

  },
  {

id: 1,
title : 'last'

  },
 

       ]

    
    return (
        <div className='partThreeDivide pt-12 colorDarkBlue' >
          
   <div >

   <div className="menu p-4 stackpos ">
     
    
  <ul className='  rounded'>
 
  <button  className="btn  btn-info  text-white "><GiSelfLove className='text-2xl mr-2'/> Compare </button>
    {menuItem.map( menu=>(

<li> 

<Link className="btn btn-outline btn-info m-2" to={menu.title} smooth={true} offset={-200} duration={1000}> {menu.title}</Link>


</li>

    ))


    }
    

  </ul>
   
  
   </div>
  

   </div>

  {/* middle content start */}
   <div >
     
   <div className='home' id='home'>
   
  <Article></Article>
  </div>
   <div className='compare' id='compare'>
   
   <h1>compare</h1>
  </div>

   <div className='middle' id='middle'>
   
   <Article></Article>
  </div>

   <div className='last' id='last' >
   
   <Article></Article>
  </div>

    
   </div>
   {/* middle content end */}
  

  

</div>


      
    );
};

export default Silver;