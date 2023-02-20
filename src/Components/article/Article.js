import React, { useEffect, useState } from 'react';
import './Article.css'
import ShowArticle from './ShowArticle';
import dot from '../../assets/dot.json'
import flydot from '../../assets/flydot.json'
import Lottie from "lottie-react"
import Ads from '../Ads/Ads';
import AdminArticle from '../Admin/AdminArticle';
import DeleteArticle from '../Admin/DeleteArticle';

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
        <div className='hand'>
      {/* article */}
       {/* article section start */}

           
<section>


<section className='flex glass'>

<div className="alert shadow-lg mb-4 glass">
  <div>
      <span className='text-blue-700 font-bold text-xl'>Recent Article </span>
      <div className='justify-self-center w-14 '> <Lottie animationData={flydot}/></div>
  </div>
  
</div>

</section  >

<div  className=' gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  
{
  article.map(article=> <ShowArticle
  
    article={article}
  ></ShowArticle> )


}

</div>
</section>

       {/* article section start */}



       {/* ad section start  */}

       <div>
       <div>
  {/* <div>
   <Ads></Ads>
  </div> */}
</div>
       </div>
       {/* ad section  end */}


        </div>
    );
};

export default Article;