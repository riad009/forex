import React from 'react';
import { Link } from 'react-router-dom';

const ShowArticle = ({article}) => {

  // const handleDelete=()=>{
     
       
  //   fetch(`https://d-azure.vercel.app/deleteArticle/${article._id}`,{
    
    
  //   method: 'DELETE'
    
  //   })
  //   .then(res=>res.json)
  //   .then(er=>console.error(er))
    
    
    
    // setTimeout(()=>{
    // window.location.reload(false);   
    // },1500)
    // alert('deleted task')
    
  //   }

  const date = article?.date?.slice(0,10);
  const time = article?.date?.slice(11,19);
    
    return (
        <div>
          <div className="card w-85 bg-base-100 shadow-xl ">
 

  {
                                     article.img ?
                                     <> <figure><img className='h-60' src={article.img} alt="picture" /></figure>
                                     </>
                                     :
                                     <><figure><img src="https://assets-homepages-learning.3plearning.net/wp-content/uploads/2020/06/blog-20-student-engagement-strategies-captivating-classroom.png" alt="Shoes" /></figure></>
                                    

                                   }

  
  <div className="card-body">
    <h2 className="card-title text-justify">
      {article.title}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p className='text-justify'>{article.details.slice(0,350)} 
    
    
    <button className="text-blue-200"><Link to={`/recentarticled/${article._id}`} >... more</Link></button>
       
        
    </p>
    <div className="card-actions justify-end">
    {/* <button onClick={handleDelete}  className="btn btn-outline btn-warning">Delete Task {article.title}</button>
                 */}
      <div className="badge badge-outline">Author : {article.name} </div> 
      <div className="badge badge-outline">Date : {date}</div>


    </div>
    <br /> <button className="btn btn-info btn-sm mt-2 btn-wide mb-3"><Link to={`/recentarticled/${article._id}`} >comment </Link></button>
  
  </div>
</div>
        </div>
    );
};

export default ShowArticle;