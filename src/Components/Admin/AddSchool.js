import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import './AddSchool.css'

const AddSchool = () => {

    const handleAdd=(event)=>{
        event.preventDefault()
    

        const category = event.target.category.value
      
        const logo = event.target.logo.value
       
      
    

          const submit={  
         

          //new     
          category: category ,
          
          logo: logo,
          
        
            
              
          }
      
        
        fetch('https://d-azure.vercel.app/addTown',{
          
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
         toast.success(`New  ${category} Town Added !`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      
        })
      
        
          
      //submit
      
          
           
          }
    const handleAddSchool=(event)=>{
        event.preventDefault()
    

        const category = event.target.category.value
        const city = event.target.city.value
        const school = event.target.school.value
        const students = event.target.students.value
        const location = event.target.location.value
        const grades = event.target.grades.value
        const img = event.target.img.value
      
          
       
      
    

          const submit={  
         

          //new     
          category: category ,
          
          city: city,
          school: school,
          students: students,
          location: location,
          grades: grades,
          img: img,
          
        
            
              
          }
      
        
        fetch('https://d-azure.vercel.app/addSchool',{
          
          method: "POST",
          headers:{
           "content-type" : "application/json"
          },
          
          body: JSON.stringify(submit)
       
           })
           .then(res=>res.json())
        .then(data=>{
       
        if(data.acknowledged){
            
            // event.target.reset()
       
         }
         toast.success(`New  ${school} school Added !`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      
        })
      
        
          
      //submit
      
          
           
          }

        //   add school
          
    
    return (
        <div className='grid lg:grid-cols-2 grid grid-cols-1'>
             {/* <h1 className="text-5xl font-bold mt-6 text-blue-400 ">Add School</h1> */}
 
 {/* section 1 -----------------------------------*/}
             <div className="  min-h-screen bg-base-200">
<div className="hero-content flex-col ">
<div className="text-center">
   {/* <h1 className="text-3xl font-bold mt-6 text-blue-400 ">Add New Town</h1> */}
   <div className="alert shadow-lg">
  <div>
     <div>
      <h3 className="font-bold text-2xl text-orange-600">Add New Town</h3>
      
      <div className="text-xs"> <div className='flex  '>
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
   
      <span >Town name must be uniq! only one town name will exist at a time</span>
        </div> </div>
    </div>
  </div>
  
</div>
{/* <div className='justify-self-center w-96'><Lottie animationData={article}/></div> */}
</div>

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={handleAdd} className="card-body">
    
<div className="form-control">
    </div>
  {/* // */}
  <div className="form-control">
  
    <label className="label">
      <span className="label-text">Town Name</span>
    </label>
    <input type="text" placeholder="Type here" required className="input input-bordered input-info w-full max-w-xs" name='category'/> </div>

  {/* // */}
  
  <div className="form-control">
    <label className="label">
      <span className="label-text mt-4">Picture <span className='opacity-50'>optional </span></span>
    </label>
    <textarea className="textarea input-sm textarea-success" placeholder="Give picture link for Town thumbnail" name='logo'></textarea> 
  </div>
 
  <div className="form-control mt-6">
    <button className="btn btn-primary">Add this Town</button>
   
     </div>
</form>

</div>
</div>
</div>


 {/* section 2 =================================== */}

 <div className=" min-h-screen bg-base-200 ">
<div className="hero-content flex-col ">
<div className="text-center">
   {/* <h1 className="text-3xl font-bold mt-6 text-red-400 ">Add New School</h1>
  */}
  <div className="alert shadow-lg text-2xl font-bold text-info">
  <div>
     <span>Add a New School </span>
  </div>
</div>
{/* <div className='justify-self-center w-96'><Lottie animationData={article}/></div> */}
</div>

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={handleAddSchool} className="card-body">
<div className="form-control">
    </div>
  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Town name </span>
    </label>
    <input type="text" placeholder="Type here" required className="input input-bordered input-info w-full max-w-xs" name='category'/> </div>

  {/* // */}

  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">City  name </span>
    </label>
    <input type="text" placeholder="Type here" required className="input input-bordered input-info w-full max-w-xs" name='city'/> </div>

  {/* // */}

  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">School  name </span>
    </label>
    <input type="text" placeholder="Type here" required className="input input-bordered input-info w-full max-w-xs" name='school'/> </div>

  {/* // */}

  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Total students</span>
    </label>
    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" name='students'/> </div>

  {/* // */}
  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Location details</span>
    </label>
    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" name='location'/> </div>

  {/* // */}
  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Grades</span>
    </label>
    <input type="text" placeholder="Type here"  className="input input-bordered input-info w-full max-w-xs" name='grades'/> </div>

  {/* // */}
  
  <div className="form-control">
    <label className="label">
      <span className="label-text mt-4">School Picture <span className='opacity-50'>optional </span></span>
    </label>
    <textarea className="textarea input-sm textarea-success" placeholder="Give picture link for Town thumbnail" name='img'></textarea> 
  </div>
 
  <div className="form-control mt-6">
    <button className="btn btn-primary">Add this school</button>
   
     </div>
</form>

</div>
</div>
</div>

<ToastContainer/>
        </div>
    );
};

export default AddSchool;