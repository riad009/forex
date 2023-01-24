import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Deleted = ({d}) => {

  const handleDelete=()=>{
  
       
       var answer = window.confirm("Delete Article?");
   
       if (answer) {
         
        fetch(`https://d-azure.vercel.app/deleteArticle/${d._id}`,{
    
    
    method: 'DELETE'
    
    })
    .then(res=>res.json)
    .then(er=>console.error(er))
    
    
    
    
    toast.error(`Article ${d.title} deleted! check in home page`, {
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
    
      
      fetch(`https://d-azure.vercel.app/updatArticle/${d._id}`,{
        
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


    const date = d?.date?.slice(0,10);
    const time = d?.date?.slice(11,19);
   
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
   
      <Link className='' to={`/updatearticleid/${d._id}`} > <button className='btn btn-outline btn-success'>Edit Article</button>  </Link>

        
       
  
   
    </h2>
    <p className='text-justify'>{d.details.slice(0,350)} 
    
    
    <button className="text-blue-200"><Link to={`/recentarticled/${d._id}`} >... more</Link></button>
       
    </p>
    <div className="card-actions justify-end">
                 
    <div className="badge badge-outline">Author : {d.name} </div> 
      <div className="badge badge-outline">Date : {date}</div>
      <div className="badge badge-outline">Time : {time}</div>
    </div>
  </div>
</div>

<ToastContainer/>
        </div>
    );
};

export default Deleted;
