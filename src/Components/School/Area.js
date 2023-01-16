import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Compare from '../Compare/Compare';
import AreaDetails from './AreaDetails';
import {Link} from "react-scroll";
import { AuthContext } from '../Auth/AuthProvider';
import find from '../../assets/vip-8.json'
import buy1 from '../../assets/vip-10.json'
import buy2 from '../../assets/vip-10.json'
import Lottie from "lottie-react"


const Area = () => {
    const {user,loading}=useContext(AuthContext)
    const [admin,setAdmin]=useState([])
    

//admin
useEffect(()=>{

    fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=> setAdmin(data))

},[user?.email])

    const menuItem =[

        
        {
      
      id: 1,
      title : 'view compare'
      
        },
     
       
      
             ]
    const navigate=useNavigate()
    const [cart,setCart]=useState([])
    const [timeLeft, setTimeLeft] = useState(0);
    
    const [limit, setlimit] = useState(2);

   

    //
    
    const handleCompare=(d)=>{
        
        setTimeLeft(timeLeft + 1);
        setlimit(limit - 1);
        

          const newCart =[...cart, d];
    setCart(newCart);
     console.log('cccccart',cart)
            
        console.log("ccccccccclick")
        console.log(d)
    
        toast.success(`${d.school} added to compare list !`, {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
      }



    


    //

    const detail = useLoaderData()

   
    return (
        <div>


    


{
  timeLeft <=0 ?
  <>  
  </>
  :
  
 <><div className="alert shadow-lg mt-8 mb-6 ">
 <div>
    <div>
     <h3 className="font-bold">{timeLeft} School selected for compare</h3>
        {

        limit ==10 ?
        <>
        
        <div className='flex'>
        <div className='justify-self-center w-12'><Lottie animationData={find}/>  </div>
        <div className="text-xs flex"> <p> vip member have unlimited </p></div>

        </div>
        </>
        :
        <>
        <div className='flex'>
        <div className="text-xs flex mt-2">You have <p className='text-red-400 ml-1 mr-1'>  {limit}  </p> school left to compare</div>
       <a href="https://support.google.com/googleplay/answer/4646404?hl=en&co=GENIE.Platform%3DAndroid"> <div className='justify-self-center w-40  ml-2 mt-1  hover:underline '><Lottie animationData={buy2}/> </div>
  </a>
       </div>    
  </>
     }
   </div>
 </div>
 <div className="justify-center">
   <button className="btn ">   <th>{menuItem.map( menu=>(



<Link className="" to={menu.title} smooth={true} offset={-20} duration={200}> {menu.title}</Link>




    ))


    }</th>
       </button>
 </div>
</div></>
 

}
          
       {/*  */}
       
       {/*  */}
 
           {
            detail.map((d,i)=> <h1>   <AreaDetails d={d} i={i+1} limit={limit} setlimit={setlimit} handleCompare={handleCompare} ></AreaDetails>
            
             
              </h1>
            
            )
           
           }
 
{/* extra code */}

{/* {menuItem.map( menu=>(

<li> 

<Link className="btn btn-outline btn-info m-2" to={menu.title} smooth={true} offset={-200} duration={1000}> {menu.title}</Link>


</li>

    ))


    } */}

<div className='view compare' id='view compare'>
   
{


cart.map(c=> <Compare  c={c}></Compare>)
 }

   </div>


 {/* extra code  */}
           
        </div>
    );
};

export default Area;


//

