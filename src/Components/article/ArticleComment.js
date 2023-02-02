import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthProvider';
import CommentShowArticle from './CommentShowArticle';

const ArticleComment = ({d}) => {
    const {user,loading}=useContext(AuthContext)
    const navigate=useNavigate()
    const handdlerror=()=>{

        alert('please login for comment')
        navigate('/login')
    }

    const handleComment =(event)=>{

        event.preventDefault()
        const comment = event.target.comment.value 
        console.log('comment check 2',comment)
// cp code
const date = new Date()

      const submit={  
    
      comment : comment,
      date: date,
      combine: d.combine,
      email: user.email,
 
          
      }
  
    
    fetch('https://d-azure.vercel.app/articlecomment',{
      
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
  
    })
  
    
    


        toast.success(`Comment Added !`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      
      
  //submit
  
// cp code
        
    }

   //cp comment show 

   const [comment , setsetshowcomment]= useState([])

   useEffect(()=>{
       fetch(`https://d-azure.vercel.app/getarticlecomment?combine=${d?.combine}`)
       
       .then(res=>res.json())
       .then(data=>setsetshowcomment(data))
     
             
       
           },
           
           [])
           



   //cp comment show

    return (
        <div>
            <h2>Article Comment</h2>
            {/* comment area */}
         <form  onSubmit={handleComment}>

         <div>
         <textarea className="textarea textarea-bordered" name='comment' placeholder="Comment about this article"></textarea>
         <br />
       {

        user?.email  ?
        <>
          <button className='btn btn-primary mt-2 px-8 '> Comment  </button>
      
        </>
        :
        <>
          <button onClick={handdlerror} className='btn btn-warning mt-2 px-8 '> Comment  </button>
      
        </>
       }
       
          </div>

         </form>
    {/* //show comment */}
         <div className='text-left mb-3 grid grid-cols-1'>
      {

        comment.map(d=>  <h1>

       <CommentShowArticle d={d} ></CommentShowArticle>

        </h1> )
      }
         </div>

        </div>
    );
};

export default ArticleComment;