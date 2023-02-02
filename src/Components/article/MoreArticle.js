import React, {  useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthProvider';
import ArticleComment from './ArticleComment';


const MoreArticle = () => {
  
 
 

    const detail = useLoaderData()
    //new code  set pre text 

  
  
       //new code 

   //update
   const handleEdit =(event)=>{

    event.preventDefault()
    const article =event.target.article.value
    const title =event.target.title.value
    
console.log("edit call",article)

    
    // const task =event.target.task.value
  
   

      const submit={  
     

      //new     
     
     
      details: article,
      title: title
    
        
          
      }
  
    
    fetch(`https://d-azure.vercel.app/updatArticle/${detail._id}`,{
      
      method: 'PUT',
      
      headers:{
       "content-type" : "application/json"
      },
      
      
      body: JSON.stringify(submit)
   
       })
       .then(res=>res.json())
    .then(data=>{
          toast.success('Article update Complete')
    console.log(data)
  

     
  
    })
      console.log(submit)
    
      
  //submit
  
     

  }
    return (
        <div className='m-4 hand'>
            {/* <h1 className="text-5xl font-bold mt-6 text-blue-400 bg-pink-100">Article Details</h1>
  */}
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={detail.img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{detail.title}</h2>
    <p className='text-left' >{detail.details}</p>
    <div className="card-actions justify-end">
      
     <Link to={'/'} > <button className="btn btn-primary">Back</button></Link>
   

 
   
   
    </div>
  </div>
</div>

{/* article comment */}
<div>
   <ArticleComment d={detail} ></ArticleComment>

</div>
        </div>
    );
};

export default MoreArticle;