import React, { useContext, useEffect, useState } from 'react';
import Nestedarea from './Nestedarea';
import city from '../../assets/find-2.json'
import Lottie from "lottie-react"
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Auth/AuthProvider';


const Areacard = ({name}) => {

 
  const {user,loading}=useContext(AuthContext)
  const [admin,setAdmin]=useState([])

  useEffect(()=>{

    fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=> setAdmin(data))

},[user?.email])
  
  const handleDelete=()=>{

    //

    let result = window.prompt("Deleting a town will delete all school information and city in that area ! \nEnter 'yes' to confirm", "");
    if (result === "yes") {
        //
     
       
    fetch(`https://d-azure.vercel.app/deletecategory/${name._id}`,{
    
    
    method: 'DELETE'
    
    })
    .then(res=>res.json)
    .then(er=>console.error(er))
    
    
    
    setTimeout(()=>{
    window.location.reload(false);   
    },3000)
    toast.error(`Town ${name.category} deleting....!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
    } else {
      // User clicked "Cancel" or entered a different value
    }
  
    
    }
    const [areacategories,setareaCategories]=useState([]);
    useEffect(()=>{
        fetch('https://d-azure.vercel.app/areaschool')
        .then(res=>res.json())
        .then(data=>setareaCategories(data))
        
       
            },
            [])
            const un= "city"
            const uniq= [...new Map(areacategories.map(cat=> [cat[un],cat]  )).values()]

            

           
    return (
     <div >

<div >


<div className="card w-70 glass">
  
{
                                     name.logo ?
                                     <> <figure><img className='h-60' src={name.logo} alt="picture" /></figure>
                                     </>
                                     :
                                     <><figure><img className='h-60' src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Faisal_Masjid_From_Damn_e_koh.jpg" alt="Shoes" /></figure></>
                                    

                                   }
                                 
  <div className="card-body ">
 
   <div className='flex'>
   <h2 className="card-title font-bold text-3xl text-indigo-800">  {name.category}</h2>
   
   
    <div className='justify-self-center w-24'><Lottie animationData={city}/></div>
    
   </div>
   
    <div className="card-actions justify-start">
      <button className="  ">


{
              

              uniq.map(nested=> <h1>

                {
              nested.category==name.category ?
              
<> <Nestedarea
nested={nested}

></Nestedarea>   </>
              :
              <></>

                }

              </h1>)
              
              
            }

      </button>
      
    </div>
  </div>


{


  admin.map(s=>  <h1>

{

s.accountType=="admin" || s.accountType=="moderator" ?
<> 
<button onClick={handleDelete}  className="btn btn-outline btn-warning w-full ">Delete</button>
      

</>
:
<>

</>
    }
    
  </h1>)
}

</div>



            
        </div>
        <ToastContainer/>
       
     </div>
    );
};

export default Areacard;