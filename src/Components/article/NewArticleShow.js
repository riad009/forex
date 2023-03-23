import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css'
import ArticleComment from './ArticleComment';

const NewArticleShow = ({article}) => {
  
    return (
        <div  className='flex'>
           
   <div className="w-60 h-auto p-4">
  
    <figure><img className="" src={article.img} alt="picture" /></figure>
 
   
</div>


          
           {/*  */}
           <div className=' mt-3 text-left'>
            <a href={`/recentarticled/${article.url}`}> <h4 className='hover:underline hover:text-blue-400 font-bold'>{article.title.slice(0,70)}</h4>
          </a>
           {/* <Link to={`/recentarticled/${article.url}`} >
           <h4 className='hover:underline hover:text-blue-400 font-bold'>{article.title.slice(0,70)}</h4>
           
         </Link> */}
               
      <Link to={`/recentarticled/${article.url}`} >
      {/* <p className='hover:underline hover:text-blue-400 hidden sm:block md:block' onClick={() => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollStep = -scrollTop / (500 / 15); // 500ms animation time
  const scrollInterval = setInterval(() => {
    if (window.pageYOffset <= 0) {
      clearInterval(scrollInterval);
    }
    window.scrollBy(0, scrollStep);
  }, 15);
  
}}>
  {article.details.slice(0,240)}
</p> */}
      <p className='hover:underline hover:text-blue-400 hidden sm:block md:block'>
  {article.details.slice(0,240)}
</p>

         </Link>
         
           </div>
           
        </div>
    );
};

export default NewArticleShow;
