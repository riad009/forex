import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthProvider';

const UpdateSchool = () => {
  
  const {user,loading}=useContext(AuthContext)
  const options = [
    "Robotics",
    "Nazra",
    "Sports",
    "Science Lab",
    "Computer Literacy",
    "Library",
    "Swimming pool",
    "Co education",
    "Agha Khan Board",
    "Only Girls",
  ];
  const [checkedOptions, setCheckedOptions] = useState([]);
  
  const handleCheck = (option) => {
    if (checkedOptions.includes(option)) {
      setCheckedOptions(checkedOptions.filter((o) => o !== option));
    } else {
      setCheckedOptions([...checkedOptions, option]);
    }
  }
  const detail = useLoaderData()

  //rank
  const handlerank =(event)=>{

    event.preventDefault()
  

      const submit={  
     

        rank: "no"
          
       
      }
  
    
    fetch(`https://d-azure.vercel.app/schoolrank/${detail._id}`,{
      
      method: 'PUT',
      
      headers:{
       "content-type" : "application/json"
      },
      
      
      body: JSON.stringify(submit)
   
       })
       .then(res=>res.json())
    .then(data=>{
          toast.success('school rank removed !')
    console.log(data)
  

     
  
    })
      console.log(submit)
    
      
  //submit
  
     

  }
 

  //rank
  
  //ref
 
  const category = useRef(null);
  const city  = useRef(null);
  const students  = useRef(null);
  const location  = useRef(null);
  const schoolType  = useRef(null);
  const salaryrange  = useRef(null);
  const yearestablished  = useRef(null);
  const  totalteachers  = useRef(null);
  const  ReligiousAfiliation  = useRef(null);
  const  contact  = useRef(null);
  const  reading  = useRef(null);
  const  math  = useRef(null);
  const   youtube  = useRef(null);
  

  useEffect(() => {
   
    category.current.value = detail.category
    city.current.value = detail.city
    students.current.value = detail.students
    location.current.value = detail.location
    schoolType.current.value = detail.schoolType
    salaryrange.current.value = detail.salaryrange
    yearestablished.current.value = detail.yearestablished
    totalteachers.current.value = detail.totalteachers
    ReligiousAfiliation.current.value = detail.ReligiousAfiliation
    contact.current.value = detail.contact
    reading.current.value = detail.reading
    math.current.value = detail.math
    youtube.current.value = detail.youtube


    
  
  }, [])

  //ref

// total student verify

const [selectedTotalStudents,setselectedTotalStudents] = useState('verify');

const handleTotalStudents = (event) => {
  setselectedTotalStudents(event.target.dataset.color);
  console.log('total student',selectedTotalStudents)
}



// youtube verify//

const [selectedYoutube,setselectedYoutube] = useState('verify');

const handleYoutube = (event) => {
  setselectedYoutube(event.target.dataset.youtube);
}
console.log('youtube',selectedYoutube)


//
// school type verify

const [selectedschoolType,setselectedschoolType] = useState('verify');

const handleschoolType = (event) => {
setselectedschoolType(event.target.dataset.feature);
}
console.log('youtube',selectedschoolType)
//

//
//
// total teacher verify

const [selectedtotalteachers,setselectedtotalteachers] = useState('verify');

const handletotalteachers = (event) => {
setselectedtotalteachers(event.target.dataset.totalteachers);
}
console.log('selectedtotalteachers',selectedtotalteachers)
//
// school type verify

const [selectedestablished,setselectedestablished] = useState('verify');

const handleestablished = (event) => {
setselectedestablished(event.target.dataset.established);
}
console.log('setselectedestablished',selectedestablished)
//


// school type verify

const [selectedrelegios,setselectedrelegios] = useState('verify');

const handlerelegios = (event) => {
setselectedrelegios(event.target.dataset.relegios);
}
console.log('selectedrelegios',selectedrelegios)
//


// curricular verify

const [selectedcurricular,setselectedcurricular] = useState('verify');

const handlecurricular = (event) => {
setselectedcurricular(event.target.dataset.curricular);
}
console.log('curricuar',selectedcurricular)
//




//////////////////
   
  
 
  //update
  
  const handleEdit =(event)=>{

    event.preventDefault()
    const category = event.target.category.value
    const city = event.target.city.value
    
    const students = event.target.students.value
    const location = event.target.location.value
    const grades = event.target.grades.value
    const img = event.target.img.value
    const schoolType = event.target.schoolType.value
    const salaryrange = event.target.salaryrange.value
    const youtube = event.target.youtubevideo.value
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
      // verify new add
      const yearestablished = event.target.yearestablished.value
      const totalteachers = event.target.totalteacher.value
      const ReligiousAfiliation = event.target.ReligiousAfiliation.value
      const Extracurricular = event.target.Extracurricular.value
    
    
//new
const website = event.target.website.value
const contact = event.target.contact.value
const gmail = event.target.gmail.value
const map = event.target.map.value
const school = event.target.school.value
const schoolName = event.target.schoolName.value
const ranknum = event.target.ranknum.value
const membership = event.target.membership.value

    
    // const task =event.target.task.value
  
   

      const submit={  
     

        category: category ,
        checkedOptions:checkedOptions,
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
           // verify new add
           yearestablished:yearestablished,
           totalteachers:totalteachers,
           ReligiousAfiliation:ReligiousAfiliation,
           Extracurricular:Extracurricular,
         
           //verify
           selectedTotalStudents: selectedTotalStudents,
           selectedYoutube:selectedYoutube,
           selectedschoolType:selectedschoolType,
           selectedestablished:selectedestablished,
           selectedtotalteachers:selectedtotalteachers,
           selectedcurricular:selectedcurricular,
           selectedrelegios:selectedrelegios,

           website:website,
           contact : contact,
           gmail: gmail,
           map : map,
           schoolName:schoolName,
           school:school,
           ranknum:ranknum,
           membership:membership,

           
           
        
    
       
          
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
          toast.success('School updating... dont go back before processing is done')
    console.log(data)
  

     
  
    })
      console.log(submit)
    
      
  //submit
  
  

  }
  const [admin,setAdmin]=useState([])
  //admin
useEffect(()=>{

  fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
  .then(res=>res.json())
  .then(data=> setAdmin(data))

},[user?.email]) 
    return (
        <div>
          <div>
    <h2 onClick={handlerank} className='btn btn-error mt-2'>remove rank </h2>
           

          </div>

    <div className=" min-h-screen bg-base-200 ">
<div className="hero-content flex-col ">
<div className="text-center">
   {/* <h1 className="text-3xl font-bold mt-6 text-red-400 ">Add New School</h1>
  */}

  <div className="alert shadow-lg text-2xl font-bold text-info">
  <div>
     <span>Update School of {detail.school}</span>
  </div>
</div>
{/* <div className='justify-self-center w-96'><Lottie animationData={article}/></div> */}
</div>

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form onSubmit={handleEdit} className="card-body">
<div className="form-control">
    </div>
  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Town name </span>
    </label>
    <input ref={category} type="text" placeholder="Type here"  className="input input-bordered input-info w-full max-w-xs" name='category'/> </div>

  {/* // */}

  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">City  name </span>
    </label>
    <input ref={city} type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" name='city'/> </div>

  {/* // */}

  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">School url </span>
    </label>
    <input  type="text" placeholder="dont use space: townschool" className="input input-bordered input-info w-full max-w-xs" name='school'/>
   </div>
   {/*  */}
   <div className="form-control">
    <label className="label">
      <span className="label-text">School name </span>
    </label>
    <input type="text" placeholder="school name"  className="input input-bordered input-info w-full max-w-xs"  name='schoolName'/>
   </div>
   {/*  */}
   {
  admin.map(s=><h1>
    {
      s.accountType=='admin' || s.accountType=='moderator' ?
      <>
       <select name="membership" className="mt-2 mb-2 select select-warning w-full max-w-xs">
  <option disabled selected>School membership</option>
  <option value='default'>by default</option>
  <option value='silver'>silver</option>
  <option value='gold'>Gold</option>
  
</select>
      </>
      :
      <>
       <select name="membership" className="bg-red-400 mt-2 mb-2 select select-warning w-full max-w-xs">
  <option disabled selected>Principle not allowed to select membership</option>
  
  
</select>
      </>
    }
  </h1>)
}
{/*  */}
   {/*  */}
   {
  admin.map(s=><h1>
    {
      s.accountType=='admin' || s.accountType=='moderator' ?
      <>
     <div className="form-control">
    <label className="label">
      <span className="label-text text-green-400 font-bold">Set School Rank </span>
    </label>
    <input type="text" placeholder="Give rank : example:2 , example: 7  "  className="input input-bordered input-success w-full max-w-xs"  name='ranknum'/>
   </div>
      </>
      :
      <>
       <select name="membership" className="bg-red-400 mt-2 mb-2 select select-warning w-full max-w-xs">
  <option disabled selected>Principle not allowed to give rank</option>
  
  
</select>
      </>
    }
  </h1>)
}
{/*  */}

   {/*  */}
   
  <div className="form-control">
    <label className="label">
      <span className="label-text">Year established</span>
      <section>

<div className='flex'>
  <h2 className='text-xs mr-2 text-stone-500'>{selectedestablished}</h2>
<input className='radio mr-4  radio-success' type="radio" color="verify" name="established" value="verify" data-established="verify" checked={selectedestablished === 'verify'} onChange={handleestablished} />
<input className='radio radio-error' type="radio" color="not verify" name="established" value="not verify" data-established="not verify" checked={selectedestablished === 'not verify'} onChange={handleestablished} />
    </div>
</section>
    </label>
    <input ref={yearestablished} type="text" placeholder="Type here"  className="input input-bordered input-info w-full max-w-xs" name='yearestablished'/>
   </div>

  {/* // */}
  
   {/*  */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Total Teachers</span>
      <section>

<div className='flex'>
  <h2 className='text-xs mr-2 text-stone-500'>{selectedtotalteachers}</h2>
<input className='radio mr-4  radio-success' type="radio" color="verify" name="totalteachers" value="verify" data-totalteachers="verify" checked={selectedtotalteachers === 'verify'} onChange={handletotalteachers} />
<input className='radio radio-error' type="radio" color="not verify" name="totalteachers" value="not verify" data-totalteachers="not verify" checked={selectedtotalteachers === 'not verify'} onChange={handletotalteachers} />
    </div>
</section>
    </label>
    <input ref={totalteachers} type="text" placeholder="Type here"  className="input input-bordered input-info w-full max-w-xs" name='totalteacher'/>
   </div>

  {/* // */}
    
     <div className="form-control">
    <label className="label">
      <span className="label-text">Religious Afiliation</span>
      <section>

<div className='flex'>
  <h2 className='text-xs mr-2 text-stone-500'>{selectedrelegios}</h2>
<input className='radio mr-4  radio-success' type="radio" color="verify" name="relegios" value="verify" data-relegios="verify" checked={selectedrelegios === 'verify'} onChange={handlerelegios} />
<input className='radio radio-error' type="radio" color="not verify" name="relegios" value="not verify" data-relegios="not verify" checked={selectedrelegios === 'not verify'} onChange={handlerelegios} />
    </div>
</section>
    </label>
    <input ref={ReligiousAfiliation} type="text" placeholder="Type here"  className="input input-bordered input-info w-full max-w-xs" name='ReligiousAfiliation'/>
   </div>
  {/* // */}
   {/* // */}
    
   <div className="form-control">
    <label className="label">
      <span className="label-text">Extra curricular</span>
      <section>

<div className='flex'>
  <h2 className='text-xs mr-2 text-stone-500'>{selectedcurricular}</h2>
<input className='radio mr-4  radio-success' type="radio" color="verify" name="curricular" value="verify" data-curricular="verify" checked={selectedcurricular === 'verify'} onChange={handlecurricular} />
<input className='radio radio-error' type="radio" color="not verify" name="curricular" value="not verify" data-curricular="not verify" checked={selectedcurricular === 'not verify'} onChange={handlecurricular} />
    </div>
</section>
    </label>
    <input type="text" placeholder="Type here"  className="input input-bordered input-info w-full max-w-xs" name='Extracurricular'/>
   </div>
  {/* // */}
  {/* // */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Location details</span>
    </label>
    <input ref={location} type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" name='location'/> </div>

  {/* // */}
  <div className="form-control">
    <label className="label">
      
      <span className="label-text">Total Students  </span>
      
      <section>

      <div className='flex'>
        <h2 className='text-xs mr-2 text-stone-500'>{selectedTotalStudents}</h2>
      <input className='radio mr-4  radio-success' type="radio" color="verify" name="color" value="verify" data-color="verify" checked={selectedTotalStudents === 'verify'} onChange={handleTotalStudents} />
      <input className='radio radio-error' type="radio" color="not verify" name="color" value="not verify" data-color="not verify" checked={selectedTotalStudents === 'not verify'} onChange={handleTotalStudents} />
          </div>
      </section>
      
       </label>
    
    <input ref={students} type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" name='students'/> </div>

  {/* // */}
  <h4>  School Features</h4> 
  <hr />
  <div className="checkbox-container">

      {options.map((option) => (
        <label key={option} className="checkbox-label">
          <input
            type="checkbox"
            checked={checkedOptions.includes(option)}
            onChange={() => handleCheck(option)}
          />
          {option}
        </label>
      ))}
    </div>
    <hr />
  {/* // features school */}
  
  <select ref={schoolType}  name='schoolType' className=" select-info  select w-full max-w-xs">
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

<section className='mt-4'>

<div className='flex'>
  <h2 className='text-xs mr-2 text-stone-500'>{selectedschoolType}</h2>
<input className='radio mr-4  radio-success' type="radio" color="verify" name="feature" value="verify" data-feature="verify" checked={selectedschoolType === 'verify'} onChange={handleschoolType} />
<input className='radio radio-error' type="radio" color="not verify" name="feature" value="not verify" data-feature="not verify" checked={selectedschoolType === 'not verify'} onChange={handleschoolType} />
    </div>
</section>


  {/* // salary range */}

  <select ref={salaryrange} required name='salaryrange' className=" select-info  select w-full max-w-xs">
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
      <section>

<div className='flex'>
  <h2 className='text-xs mr-2 text-stone-500'>{selectedYoutube}</h2>
<input className='radio mr-4  radio-success' type="radio" color="verify" name="youtube" value="verify" data-youtube="verify" checked={selectedYoutube === 'verify'} onChange={handleYoutube} />
<input className='radio radio-error' type="radio" color="not verify" name="youtube" value="not verify" data-youtube="not verify" checked={selectedYoutube === 'not verify'} onChange={handleYoutube} />
    </div>
</section>
    </label>
    <textarea ref={youtube} className="textarea input-sm textarea-success" placeholder="Exmple : https://youtu.be/8UVNT4wvIGY" name='youtubevideo'></textarea> 
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
  <option  disabled selected >College Discipline Grade</option>
  
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
    <input ref={math} type="text" placeholder="Example: 80" className="input input-bordered input-info w-full max-w-xs" name='math'/> </div>
{/*  */}
<div className="form-control">
    <label className="label">
      <span className="label-text">Reading / language art scores</span>
    </label>
    <input ref={reading} type="text" placeholder="Example: 80" className="input input-bordered input-info w-full max-w-xs" name='reading'/> </div>
{/*  */}
<div className="form-control">
    <label className="label">
      <span className="label-text">Student : Teacher ration</span>
    </label>
    <input type="text" placeholder="Example: 13:1 " className="input input-bordered input-info w-full max-w-xs" name='ratio'/> </div>
{/*  */}
<h1 className='bg-gray-400 rounded text-white'>	Verify sign for gold member </h1>
{/* verify sign */}
<section>
{/* sign start  */}
{/* <h1 className='text-left'>school</h1> */}
{/* <div className="form-control">
  <label className="label cursor-pointer">
    
    <span className="label-text">Red pill</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Blue pill</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
  </label>
</div> */}
{/* sign  end */}


</section>


{/* new add */}

<div className="form-control">
    <label className="label">
      <span className="label-text">Website </span>
    </label>
    <input type="text" placeholder="www.bestschoolpk.com " className="input input-bordered input-info w-full max-w-xs" name='website'/> </div>
{/*  */}
<div className="form-control">
    <label className="label">
      <span className="label-text">Contact info </span>
    </label>
    <input ref={contact} type="text" placeholder="01930333 " className="input input-bordered input-info w-full max-w-xs" name='contact'/> </div>
{/*  */}
<div className="form-control">
    <label className="label">
      <span className="label-text">Gmail </span>
    </label>
    <input type="text" placeholder="pk@gmail.com " className="input input-bordered input-info w-full max-w-xs" name='gmail'/> </div>
{/*  */}
<div className="form-control">
    <label className="label">
      <span className="label-text">Google map link </span>
    </label>
    <input type="text" placeholder="copy link from google maps url ,Example : https://www.google.com/maps/@31.2541795,37.3195665,6z" className="input input-bordered input-info w-full max-w-xs" name='map'/> </div>
{/*  */}


{/* new add */}


{/* student result */}
  <div className="form-control mt-6">
    <button className="btn btn-primary">Update this school</button>
   
     </div>
</form>

</div>
</div>
</div>
        </div>
    );
};

export default UpdateSchool;