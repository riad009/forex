import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateSchool = () => {


    const detail = useLoaderData()
  //update
  console.log('detail',detail)
  const handleEdit =(event)=>{

    event.preventDefault()
    const category = event.target.category.value
    const city = event.target.city.value
    const school = event.target.school.value
    const students = event.target.students.value
    const location = event.target.location.value
    const grades = event.target.grades.value
    const img = event.target.img.value
    const schoolType = event.target.schoolType.value
    const salaryrange = event.target.salaryrange.value
    const youtube = event.target.youtube.value
  //  grades
  const Academicsgd = event.target.Academicsgd.value
  const Teachersgd = event.target.Teachersgd.value
  const ClubsActivitiesgd = event.target.ClubsActivitiesgd.value
  const Diversitygd = event.target.Diversitygd.value
  const CollegePrepgd = event.target.CollegePrepgd.value
  const Sportsgd = event.target.Sportsgd.value
  const math = event.target.math.value
  const reading = event.target.reading.value
  const ratio = event.target.ratio.value 

    


    
    // const task =event.target.task.value
  
   

      const submit={  
     

        category: category ,
          
        city: city,
        school: school,
        students: students,
        location: location,
        img: img,
        schoolType: schoolType,
        salaryrange: salaryrange,
        youtube: youtube,
        
        grades: grades,
        Sportsgd:Sportsgd,
        CollegePrepgd:CollegePrepgd,
        Diversitygd:Diversitygd,
        ClubsActivitiesgd:ClubsActivitiesgd,
        Teachersgd:Teachersgd,
          Academicsgd:Academicsgd,
          reading:reading,
          ratio:ratio,
          math:math,
        
    
       
          
      }
  
    
    fetch(`https://d-azure.vercel.app/updatSchool/${detail._id}`,{
      
      method: 'PUT',
      
      headers:{
       "content-type" : "application/json"
      },
      
      
      body: JSON.stringify(submit)
   
       })
       .then(res=>res.json())
    .then(data=>{
          toast.success('School updating... Refresh page to see latest update')
    console.log(data)
  

     
  
    })
      console.log(submit)
    
      
  //submit
  
     

  }
    return (
        <div>
            <h2>Udate School</h2>
            <button id="modal-button">Open Modal</button>
            <form onSubmit={handleEdit} className="card-body">
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
 
  {/* // */}
  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Location details</span>
    </label>
    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" name='location'/> </div>

  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Total Students</span>
    </label>
    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" name='students'/> </div>

  {/* // */}

  {/* // features school */}

  <select required name='schoolType' className=" select-info  select w-full max-w-xs">
  <option  disabled selected >school features</option>
  
 <option value='Robotics'>  Robotics </option>
 <option value='Nazra'>  Nazra </option>
 <option value='Sports'>  Sports </option>
 <option value='Science Lab'>  Science Lab </option>
 <option value='Computer Literacy'>  Computer Literacy </option>
 <option value='Library'>  Library</option>
 <option value='Swimming pool'>  Swimming pool</option>
 <option value='Co education'>  Co education</option>
 <option value='Agha Khan Board '>   Agha Khan Board </option>
 <option value='Only Girls'>   Only Girls </option>
  
</select>
  {/* // salary range */}

  <select required name='salaryrange' className=" select-info  select w-full max-w-xs">
  <option  disabled selected >school fees</option>
  
 <option value='0 to 1000'> 0 to 1000 </option>
 <option value='1001 to 2500'>  1001 to 2500 </option>
 <option value='2500 to 5000'>  2500 to 5000 </option>
 <option value='5001 to 10000'>  5001 to 10000 </option>
 <option value='100001 to 30000'>  100001 to 30000</option>
 
 
  
</select>
  
  <div className="form-control">
    <label className="label">
      <span className="label-text mt-4">School Picture <span className='opacity-50'>optional </span></span>
    </label>
    <textarea className="textarea input-sm textarea-success" placeholder="Give picture link for school" name='img'></textarea> 
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text mt-4">Youtube video <span className='opacity-50'>optional </span></span>
    </label>
    <textarea className="textarea input-sm textarea-success" placeholder="Exmple : https://youtu.be/8UVNT4wvIGY" name='youtube'></textarea> 
  </div>
  <h1 className='bg-gray-400 rounded text-white'>Grading</h1>
  {/* // overall  niche grade start */}

{/*  */}
<select required name='grades' className=" select-info  select w-full max-w-xs">
  <option  disabled selected >Overall Grade</option>
  
 <option value='A+'> A+ </option>
 <option value='A'>  A </option>
 <option value='B'>  B</option>
 <option value='C'>  C </option>
 <option value='D'>  D</option>
 
 
  
</select>

{/*  */}
  <select required name='Academicsgd' className=" select-info  select w-full max-w-xs">
  <option  disabled selected >Teachers Grade</option>
  
 <option value='A+'> A+ </option>
 <option value='A'>  A </option>
 <option value='B'>  B</option>
 <option value='C'>  C </option>
 <option value='D'>  D</option>
 
 
  
</select>

{/*  */}
  <select required name='Teachersgd' className=" select-info  select w-full max-w-xs">
  <option  disabled selected >Teacher Grade</option>
  
 <option value='A+'> A+ </option>
 <option value='A'>  A </option>
 <option value='B'>  B</option>
 <option value='C'>  C </option>
 <option value='D'>  D</option>
 
 
  
</select>
{/*  */}
  <select required name='ClubsActivitiesgd' className=" select-info  select w-full max-w-xs">
  <option  disabled selected >Clubs & Activities Grade</option>
  
 <option value='A+'> A+ </option>
 <option value='A'>  A </option>
 <option value='B'>  B</option>
 <option value='C'>  C </option>
 <option value='D'>  D</option>
 
 
  
</select>
{/*  */}
  <select required name='Diversitygd' className=" select-info  select w-full max-w-xs">
  <option  disabled selected >Diversity Grade</option>
  
 <option value='A+'> A+ </option>
 <option value='A'>  A </option>
 <option value='B'>  B</option>
 <option value='C'>  C </option>
 <option value='D'>  D</option>
 
 
  
</select>
{/*  */}
  <select required name='CollegePrepgd' className=" select-info  select w-full max-w-xs">
  <option  disabled selected >College Prep Grade</option>
  
 <option value='A+'> A+ </option>
 <option value='A'>  A </option>
 <option value='B'>  B</option>
 <option value='C'>  C </option>
 <option value='D'>  D</option>
 
 
  
</select>
{/*  */}
  <select required name='Sportsgd' className=" select-info  select w-full max-w-xs">
  <option  disabled selected >Sports Grade</option>
  
 <option value='A+'> A+ </option>
 <option value='A'>  A </option>
 <option value='B'>  B</option>
 <option value='C'>  C </option>
 <option value='D'>  D</option>
 
 
  
</select>

  {/* // overall  niche grade */}


{/* student result */}
<h1 className='bg-gray-400 rounded text-white'>	Students results on different areas </h1>

<div className="form-control">
    <label className="label">
      <span className="label-text">Math test scores</span>
    </label>
    <input type="text" placeholder="Example: 80" className="input input-bordered input-info w-full max-w-xs" name='math'/> </div>
{/*  */}
<div className="form-control">
    <label className="label">
      <span className="label-text">Reading / language art scores</span>
    </label>
    <input type="text" placeholder="Example: 80" className="input input-bordered input-info w-full max-w-xs" name='reading'/> </div>
{/*  */}
<div className="form-control">
    <label className="label">
      <span className="label-text">Student : Teacher ration</span>
    </label>
    <input type="text" placeholder="Example: 13:1 " className="input input-bordered input-info w-full max-w-xs" name='ratio'/> </div>
{/*  */}





{/* student result */}
  <div className="form-control mt-6">
    <button className="btn btn-primary">Add this school</button>
   
     </div>
</form>
        </div>
    );
};

export default UpdateSchool;