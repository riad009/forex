import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Deleted = ({d}) => {

  const handleDelete=()=>{
  
       
       var answer = window.confirm("Delete data?");
   
       if (answer) {
         
        fetch(`https://d-azure.vercel.app/deleteArticle/${d._id}`,{
    
    
    method: 'DELETE'
    
    })
    .then(res=>res.json)
    .then(er=>console.error(er))
    
    
    
    setTimeout(()=>{
    window.location.reload(false);   
    },3000)
    toast.error(`Article ${d.title} deleted!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
         
       } else {
        
       }
       //
   
    
    }

   
    
    return (
        <div>
          <div className="card w-85 bg-base-100 shadow-xl ">
 

  {
                                     d.img ?
                                     <> <figure><img className='h-60' src={d.img} alt="picture" /></figure>
                                     </>
                                     :
                                     <><figure><img src="https://assets-homepages-learning.3plearning.net/wp-content/uploads/2020/06/blog-20-student-engagement-strategies-captivating-classroom.png" alt="Shoes" /></figure></>
                                    

                                   }

  
  <div className="card-body">
    <h2 className="card-title">
      {d.title}
      <button onClick={handleDelete}  className="btn btn-outline btn-warning">Delete Article </button>
   
    </h2>
    <p className='text-justify'>{d.details.slice(0,350)} 
    
    
    <button className="text-blue-200"><Link to={`/recentarticled/${d._id}`} >... more</Link></button>
       
    </p>
    <div className="card-actions justify-end">
                 
      <div className="badge badge-outline">Author : Forex </div> 
      <div className="badge badge-outline">Date : 08 january</div>
    </div>
  </div>
</div>
<ToastContainer/>
        </div>
    );
};

export default Deleted;
