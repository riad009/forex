import React, {  useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthProvider';


const UpdateArticle = () => {
  
  const [admin ,setAdmin]=useState([])
  const {user,loading}=useContext(AuthContext)
 

    const detail = useLoaderData()
    //new code  set pre text 
  const textAreaRefDetail = useRef(null);
  const textAreaRefTitle = useRef(null);
  const textAreaRefUrl = useRef(null);

  useEffect(() => {
    textAreaRefDetail.current.value = detail.details
  
  }, []); 
  useEffect(() => {
    textAreaRefTitle.current.value = detail.title
  
  }, []); 
  useEffect(() => {
    textAreaRefUrl.current.value = detail.url
  
  }, []); 
   //admin
useEffect(()=>{

  fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
  .then(res=>res.json())
  .then(data=> setAdmin(data))

},[user?.email])
  
       //new code 

   //update
   const handleEdit =(event)=>{

    event.preventDefault()
    const article =event.target.article.value
    const title =event.target.title.value
    const url =event.target.url.value
    
console.log("edit call",article)

    
    // const task =event.target.task.value
  
   

      const submit={  
     

      //new     
     
     
      details: article,
      title: title,
      url: url,
    
        
          
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
        <div className='m-4'>
            {/* <h1 className="text-5xl font-bold mt-6 text-blue-400 bg-pink-100">Article Details</h1>
  */}
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={detail.img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{detail.title}</h2>
    <p className='text-left' >{detail.details}</p>
    <div className="card-actions justify-end">
      
    

  {/* modal */}


  <section>
        

        {/* The button to open modal */}
        <label htmlFor="my-modal-10" className="btn  btn-success">Update Article</label>
        
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-10" className="modal-toggle" />
        <div className="modal">
          <form onSubmit={handleEdit} className="modal-box relative">
            <label htmlFor="my-modal-10" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
             <input  ref={textAreaRefTitle}     type="text" name='title' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
           <br /> <br />
             <input  ref={textAreaRefUrl}     type="text" name='url' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
           <br /> <br />
          
            <textarea ref={textAreaRefDetail}   onChange className="textarea textarea-accent w-full" name='article' placeholder="Article detail" ></textarea>
           
           <br /> <br /> <button className="btn  btn-success">Update Article </button>
           
          </form>
          
        </div>
        
        
               
    </section>
  {/* {
   admin.map(s=>  <h1>
   
   {
    s.accountType=="admin" ||  s.accountType=="moderator"  ?
    <>
 
    </>
    :
    <>
   
    </> 


   }  
   </h1>  )

  }
   */}
   
 {/* modal */}
   
   
    </div>
  </div>
</div>

        </div>
    );
};



export default UpdateArticle;