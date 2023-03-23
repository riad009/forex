import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { MdOutlineDateRange } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';
const Fs2howComment = ({numbers}) => {
  const deletecomment=()=>{
    
    var answer = window.confirm("Delete comment ?");
   if(answer){


    fetch(`https://d-azure.vercel.app/deletecomment/${numbers._id}`,{
    
    
    method: 'DELETE'
    
    })
    .then(res=>res.json)
    .then(er=>console.error(er))
  
   

    toast.error(`comment ${numbers.comment} deleted`, {
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
 

  const [storedNumbers, setStoredNumbers] = useState([]);
const [sum, setSum] = useState(0);

 console.log('mmmmmmmmmmmmm',numbers.date)
  const {user,loading}=useContext(AuthContext)
    // const ddd = numbers.date.slice(0,10);
   
// 
 


console.log('rating',numbers.rating)
    
   


    return (
        <div className='text-white mb-4'>

<div className=" card w-60 lg:w-96 bg-base-100 text-gray text-black shadow-xl">
  {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">
    <CgProfile/>
    Parent 
    
      <div className=" text-sm text-slate-500">{numbers.date}</div>
  {/* rating  start*/}
  
    </h2>
   
    

    <p className='text-justify text-left '> {numbers.comment}</p>
    <h2 onClick={deletecomment} className='text-red-400 text-2xl'>  <MdDeleteForever/>  </h2>
    <div className="card-actions justify-end">
      <div className="">
        
{
        numbers.selectedOption==='yes' ?

      <>😇
      </>
      :
      <></>
      
      
      
}
{
        numbers.selectedOption==='no' ?

      <>😈
      </>
      :
      <>😃</>
      
      
      
}
</div> 
      <div className="badge badge-outline text-slate-500"><AiOutlineFieldTime/>{numbers.time}</div>
    </div>
  </div>
  
</div>
          
         
          
         
          
         

        </div>
    );
};

export default Fs2howComment;