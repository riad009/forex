import src from 'daisyui';
import React, {  useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Ads from '../Ads/Ads';
import { AuthContext } from '../Auth/AuthProvider';
import AlArticle from './AlArticle';
import Article from './Article';
import ArticleComment from './ArticleComment';
import './MoreArticle.css'
import { HiOutlineNewspaper } from 'react-icons/hi';
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

  //search article
  
  const [inputValue, setInputValue] = useState(''); //get name from input
  const [schoolname, setTowsalaryRangeSchool] = useState([])
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue)

  // get name from db
  useEffect(() => {

    fetch(`https://d-azure.vercel.app/findarticle/${inputValue}`)
     .then(res => res.json())
    .then(data => {
      setTowsalaryRangeSchool(data)
   
    
    
    })
    
    }, [inputValue])
  //search article
  console.log('towsalaryRangeSchool',schoolname)
    return (
<div>
  
<section  ref={topRef} className=''>
   {/* search */}
   <div className='flex justify-end m-4'>
    <section>
    <input type='text' placeholder='Search Article..' className='input input-info w-full max-w-xs' value={inputValue} onChange={handleInputChange} />
   {/*  */}
   {inputValue.length ?   
    <div  style={{position: 'absolute', top: '5', left: '10',  backgroundColor: 'white'}}
      className="border-1 shadow-xl text-left p-2    text-black text-sm justify-left text-white    m-2"
      
    >
      {
        schoolname.slice(0, 4).map((sc) =>
        
          <h2 className='mt-2 font-bold hover:underline hover:bg-blue-200'>
             
             <a className='flex flex-between ' href={`/recentarticled/${sc.url}`}><HiOutlineNewspaper/> {sc.title}</a>
             
             <hr />
              </h2>
        
           
        )
      }
    </div>
    :
    <></>
  }
    </section>
    </div>
  {/* search end */}


        <div  className='mx-3'>
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

 
 {/* <button onClick={handleClick}>Scroll to Top</button> */}
</div>



      </section>
      <Article></Article>
      <AlArticle></AlArticle>
</div>
    );
};

export default MoreArticle;