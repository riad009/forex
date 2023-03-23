import React, {  useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Ads from '../Ads/Ads';
import { AuthContext } from '../Auth/AuthProvider';
import Article from './Article';
import ArticleComment from './ArticleComment';


const MoreArticle = () => {
  
 
 

    const article = useLoaderData()
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
  
    
    fetch(`https://d-azure.vercel.app/updatArticle/${article._id}`,{
      
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
  const dateStr = article.date;
  const dateObj = new Date(dateStr);
  
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();
  const topRef = useRef(null);

  function handleClick() {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }
    return (

      <section ref={topRef} className='article-more'>
        <div className='m-3'>
  <h1 className='text-left font-bold text-2xl'>{article.title}</h1>
<div > <p className='flex italic mt-3'>Author: {article.name}  <span className='mr-4'></span>  <p className='text-slate-500 font-italic'>Updated: {month} {date}, {year}</p>   </p></div>
  <div className="w-100 h-auto mt-4 " >
           {
                                     article.img ?
                                     <> <figure><img className='' src={article.img} alt="picture" /></figure>
                                     </>
                                     :
                                     <><figure><img className='' src="https://www.greatschools.org/gk/wp-content/uploads/2022/12/Neighborhood-school-closing.jpg" alt="Shoes" /></figure></>
                                    

                                   }
           </div>
         <p className='text-justify mt-4 mb-4'>  {article.details}</p>
         < hr />
          <div>
   <ArticleComment d={article} ></ArticleComment>

 </div>
 <Article></Article>
 <button onClick={handleClick}>Scroll to Top</button>
</div>

<div>
  <Ads></Ads>
</div>
      </section>
//         <div className='m-4 hand'>
//             {/* <h1 className="text-5xl font-bold mt-6 text-blue-400 bg-pink-100">Article Details</h1>
//   */}
// <div className="card lg:card-side bg-base-100 shadow-xl">
//   <figure><img src={detail.img} alt="Album"/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{detail.title}</h2>
//     <p className='text-left' >{detail.details}</p>
//     <div className="card-actions justify-end">
      
//      <Link to={'/'} > <button className="btn btn-primary">Back</button></Link>
   

 
   
   
//     </div>
//   </div>
// </div>

// {/* article comment */}
// <div>
//    <ArticleComment d={detail} ></ArticleComment>

// </div>
//         </div>
    );
};

export default MoreArticle;