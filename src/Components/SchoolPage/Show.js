import React, { useEffect, useState } from 'react';
import { MdLocationOn } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLocationCity } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import Silver from '../Membership/Silver';
import './Show.css'
import map from '../../assets/map-9.json'
import { AiOutlineLink } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';

import { FaSearchengin } from 'react-icons/fa';
import Lottie from "lottie-react"
import { Link } from 'react-router-dom';

const Show = (props) => {
  const [searchSchool, setSearchSchool] = useState([]);
  const [schoolname, setSchoolName] = useState("")
  

  useEffect(() => {

    fetch(`https://d-azure.vercel.app/serachSchool/${schoolname}`)
    //  fetch(`http://localhost:5000/searchSChool?searchWord=${schoolname}`)
    .then(res => res.json())
    .then(data => {
    setSearchSchool(data)
    // console.log('tow', data)
    
    
    })
    
    }, [schoolname])


  const {d}=props

 

  

//extra code for rating recieve

   
const [showcomment,setshowcomment]=useState([]);
 
    
useEffect(()=>{
  fetch(`https://d-azure.vercel.app/getcomment?combine=${d?.combine}`)
  
  .then(res=>res.json())
  .then(data=>setshowcomment(data))

        
  
      },
      
      [])
      

      const sum = showcomment.map(item => parseFloat(item.rating)).reduce((acc, val) => acc + val, 0);
      const averagebeta = sum / showcomment.length;
      console.log('avg',averagebeta); 
     
     let average = averagebeta.toFixed(1);
      console.log('length',showcomment.length); 
      console.log('sum',sum); 
      const reviews =showcomment.length;
      const ratings = Math.round(average);
      console.log('ratings',ratings)

  
// extra code or rating


  //update
  const handleEdit =(event)=>{

    event.preventDefault()
    const school =event.target.school.value
    const students =event.target.students.value
    


    
    // const task =event.target.task.value
  
   

      const submit={  
     

      //new     
     
     
      school: school,
      students: students
    
        
          
      }
  
    
    fetch(`https://d-azure.vercel.app/updatSchool/${d._id}`,{
      
      method: 'PUT',
      
      headers:{
       "content-type" : "application/json"
      },
      
      
      body: JSON.stringify(submit)
   
       })
       .then(res=>res.json())
    .then(data=>{
          toast.success('School updating... Refresh page to see latest')
    console.log(data)
  

     
  
    })
      console.log(submit)
    
      
  //submit
  
     

  }

  return (
    <div className='' >
  {/* <button onClick={()=>props.handdleCompare(d)}  className='btn '>compare</button> */}
      {/* school info banner start  */}
      <section className='divide colorBlue text-white'>

   {/* school img start  */}
   <div className="card w-96 colorBlue text-white ml-2 ">

{
  d.img ?
    <> <figure><img className='h-60 ' src={d.img} alt="picture" /></figure>
    </>
    :
    <><figure><img src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=2000" alt="Shoes" /></figure></>


}
 
<h1 className='mt-2 text-3xl mb-6 font-bold text-white text-left '>{d.school}</h1>

</div>
{/* school img end */}


{/* school details */}
<div>
<div className="card card-side colorBlue text-white grid grid-cols-2 ">
  <div>

    <ul className='text-left  text-xl  '>


    {/* rating start */}
  <div className="alert colorRating flex text-left justify-evenly ">
  <div>
     <div className='flex '>
      <button className='text-left '>{reviews} reviews</button>
      <div className="rating rating-xs ml-2 mt-2">
       {/* rating  */}
   {
         ratings =='1' ?
         <>
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         </>
         :
         <></>

   }
     
   {
         ratings =='2' ?
         <>
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
 
         </>
         :
         <></>

   }
   {
         ratings =='3' ?
         <>
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
 
         </>
         :
         <></>

   }
   {
         ratings =='4' ?
         <>
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
 
         </>
         :
         <></>

   }
   {
         ratings =='5' ?
         <>
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" disabled className="mask mask-star-2 bg-orange-400" />
 
         </>
         :
         <></>

   }
     
     {/* rating  */}
</div>
{

  average ?
  <><button className='ml-2 bg-dark px-2 rounded'>{average}</button></>
  :
  <>FcRating</>

}

    </div>
    
  </div>
  
</div>

 {/* rating end */}
    <div className='m-6 '>
    
    <li className='mt-5 flex'><ImLocation2 className='mt-1 mr-2'/> {d.location}</li>
    {/* modal */}
    <li className='mt-5 '> 

{/* The button to open modal */}
<label htmlFor="my-modal-4" className="text-white flex hover:text-blue-400 "> <AiOutlinePhone className='mt-1 mr-2'/>Contact info</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer ">
  <label className="modal-box relative " htmlFor="">
    <h3 className="text-lg text-black font-bold "> phone number : <br /> Gmail :</h3>
     </label>
</label>

    </li>
   
    <li className='mt-5'><a className='flex hover:underline hover:text-blue-400' href="https://www.youtube.com/watch?v=lHgtB7DuOD8&ab_channel=Yuvrajstudio%28Ufetal%29"><AiOutlineLink className='mr-2 mt-1 text-blue-400 rounded'/>  Website </a></li>
    <li className='mt-2'>
     {/* modal update */}


 <section className='text-red-400'>
        

        {/* The button to open modal */}
        <label htmlFor="my-modal-10" className="btn btn-outline btn-sm btn-success">Update School</label>
        
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-10" className="modal-toggle" />
        <div className="modal modal-content-scroll flex overflow-y-scroll">
          <form onSubmit={handleEdit} className="modal-box relative">
            <label htmlFor="my-modal-10" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <input      type="text" name='students' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
           <br /> <br />
          
            <textarea   onChange className="textarea textarea-accent w-full" name='school' placeholder="Article detail" ></textarea>
           
           <br /> <br /> <button className="btn  btn-success">Update Article </button>
           
          </form>
          
        </div>
        
        
               
    </section>  
      
      
     </li>
    </div>
  
   
  </ul>

  </div>
{/* <figure className='h-48'><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure> */}
<div className="card lg:w-96 sm:w-12 ">
<h2 className="card-title ml-4 ">Locate school on Google map</h2>

<div className='justify-self-center lg:w-60 sm:48'><Lottie animationData={map}/></div>



<div className="card-body">
   
   
  </div>
</div>

</div>
</div>

{/* school details */}


      </section>
      {/* school info  banner end  */}

{/* //total students */}
<div className='colorLightBlue  p-4 shadow-xl text-left flex text-xl text-white '>
<h2 className='mr-12'>{d.school} School</h2>
<h2 className='mr-12'>{d.students} Students</h2>
<h2 className='mr-12'>Grades {d.grades}</h2>


{/* <h2 className='mr-12'>schoolType {d.schoolType}</h2>
<h2 className='mr-12'>salaryrange {d.salaryrange}</h2> */}



</div>
 

      <Silver d={d} ></Silver>


      <ToastContainer />

    </div>
  );
};

export default Show;

