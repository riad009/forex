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
import { MdDeleteForever } from 'react-icons/md';
import './AreaDetail.css'

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

  //  delete
 
  
  const handleDelete=(d)=>{
    
    var answer = window.confirm("Delete this school?");
   if(answer){


    fetch(`https://d-azure.vercel.app/deletearea/${d._id}`,{
    
    
    method: 'DELETE'
    
    })
    .then(res=>res.json)
    .then(er=>console.error(er))
  
   

    toast.error(`school ${d.school} deleted`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        
   }
    
    }
  //   delete
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
 
         <div >
            {
            detail.map((d,i)=> <h1>   <AreaDetails d={d} i={i+1} limit={limit} setlimit={setlimit} handleCompare={handleCompare} ></AreaDetails>
            
             
              </h1>
            
            )
           
           }
           
         </div>
              {/* <table  id="customers">
  <thead>
    <tr>
      <th>No</th>
      <th style={{width: '75%'}}>School</th>
      <th style={{width: '20%'}}>City</th>
      <th style={{width: '5%'}}>Rule</th>
     
    </tr>
  </thead>
  <tbody>
    {detail.map((d, i) => (
      <tr key={i}>
        <td>{i+1}</td>
        <td style={{textAlign: 'start'}}>


        <Link className='hover:underline hover:text-blue-400  p-2   text-left' to={`/school/${d.school}`} >  {d.schoolName} </Link>
        </td>
        <td>{d.city} </td>
        <td>
        
        <div>
        {


admin.map(s=>  <h1>

{

s.accountType=="admin" || s.accountType=="moderator" || s.accountType=="silver" ||  s.accountType=="golden" ?
<> 


{
 
}
<p> 
<p onClick={() => handleDelete(d)} className=""> <p className='text-2xl text-yellow-400'><MdDeleteForever/></p> </p>

 </p>   

</>
:
<>

</>
  }
  
</h1>)
}
   </div>
        </td>
        
      </tr>
    ))}
  </tbody>
</table> */}
{/*  */}

 
           {/* 2/21/2023 new table */}
 
{/* extra code */}

{/* {menuItem.map( menu=>(

<li> 

<Link className="btn btn-outline btn-info m-2" to={menu.title} smooth={true} offset={-200} duration={1000}> {menu.title}</Link>


</li>

    ))


    } */}

<div className='view compare grid lg:grid-cols-1  sm:grid-cols-1' id='view compare'>
   
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

