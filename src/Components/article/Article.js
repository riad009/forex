import React, { useEffect, useState } from 'react';
import './Article.css'
import ShowArticle from './ShowArticle';
import dot from '../../assets/dot.json'
import flydot from '../../assets/flydot.json'
import Lottie from "lottie-react"
import Ads from '../Ads/Ads';
import AdminArticle from '../Admin/AdminArticle';
import DeleteArticle from '../Admin/DeleteArticle';
import NewArticleShow from './NewArticleShow';
import Advertisment from '../advertisment/Advertisment';
import  { useRef } from 'react';
const Article = () => {
  const [article,setarticle]=useState([]);
 

  useEffect(()=>{
    fetch('https://d-azure.vercel.app/recentarticle')
    
    .then(res=>res.json())
    .then(data=>setarticle(data))
          
    
        },
        
        [])

       

        //
       
      
    return (
        <div >
      {/* article */}
       {/* article section start */}

           
<section>


<div className='hand'>
<section className='flex glass'>

<div className="alert  glass">
  <div>
      <span className='text-blue-700 font-bold text-xl'>Recent Article </span>
      <div className='justify-self-center w-14 '> <Lottie animationData={flydot}/></div>
  </div>
  
</div>

</section  >
</div>

{/* <div  className=' gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  
{
  article.map(article=> <ShowArticle
  
    article={article}
  ></ShowArticle> )


}

</div> */}
<div  className='article '>
<div>
  {article.map((article, index) => (
    <div key={index}>
      <NewArticleShow article={article}  />
      {index !== article.length - 1 && <hr className="my-4" />} {/* Add hr tag after every article except the last one */}
    </div>
  ))}
  <hr className="my-4" /> {/* Add hr tag after all articles are rendered */}
</div>

<div>
  {/* <Ads></Ads> */}
</div>

</div>
</section>

       {/* article section start */}





        </div>
    );
};

export default Article;