import React, { useContext, useEffect, useState } from 'react';
import article from '../../assets/article-1.json'
import Lottie from "lottie-react"
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import { AuthContext } from '../Auth/AuthProvider';



const AdminArticle = () => {

  const [admin,setAdmin]=useState([])

  const {user,loading}=useContext(AuthContext)

  //user
useEffect(()=>{

  fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
  .then(res=>res.json())
  .then(data=> setAdmin(data))

},[user?.email])
const name = admin.map(item => item.name);

//

const date = new Date();
//

    const handleAdd=(event)=>{
        event.preventDefault()
    

        const title = event.target.title.value
        const details = event.target.details.value
        const img = event.target.img.value
             
      

          const submit={  
         

          //new     
          title: title ,
          details: details,
          img: img,
          name : name,
          date:date
        
            
              
          }
      
        
        fetch('https://d-azure.vercel.app/addarticle',{
          
          method: "POST",
          headers:{
           "content-type" : "application/json"
          },
          
          body: JSON.stringify(submit)
       
           })
           .then(res=>res.json())
        .then(data=>{
        
        if(data.acknowledged){
            
        event.target.reset()
       
         }
         toast.success('Article Posted !', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      
        })
       
        
          
      //submit
      
          
           
          }
    return (
        <div>
             <h1 className="text-5xl font-bold mt-6 text-blue-400 ">New Article Post</h1>
 
             <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
<div className='justify-self-center w-96'><Lottie animationData={article}/></div>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={handleAdd} className="card-body">
<div className="form-control">
    </div>
  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Title</span>
    </label>
    <input type="text" placeholder="Type here" required className="input input-bordered input-info w-full max-w-xs" name='title'/> </div>
  {/* // */}
  
  <div className="form-control">
    <label className="label">
      <span className="label-text">Details</span>
    </label>
    <textarea className="textarea textarea-info" required placeholder="Write your article here..." name='details'></textarea> 
  </div>
  {/* // */}
  
  <div className="form-control">
    <label className="label">
      <span className="label-text">Picture <span className='opacity-50'>optional </span></span>
    </label>
    <textarea className="textarea input-sm textarea-success" placeholder="Give picture link for article thumbnail" name='img'></textarea> 
  </div>
 
  <div className="form-control mt-6">
    <button className="btn btn-primary">Article post</button>
   
     </div>
</form>

</div>
</div>
</div>

<ToastContainer/>
        </div>
    );
};

export default AdminArticle;