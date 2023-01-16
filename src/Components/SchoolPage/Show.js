import React from 'react';
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


import Lottie from "lottie-react"

const Show = (props) => {
  const {d}=props

 

  // const handdleCompare=()=>{

  //   console.log('clickkkkkkkkk')
  // }

  // const handleAdd = (event) => {
  //   event.preventDefault()

  //   console.log("submit done")
  //   const category = event.target.category.value
  //   const city = event.target.city.value
  //   const school = event.target.school.value
  //   const students = event.target.students.value
  //   const location = event.target.location.value
  //   const grades = event.target.grades.value
  //   const img = event.target.img.value






  //   const submit = {


  //     //new     
  //     category: category,

  //     city: city,
  //     school: school,
  //     students: students,
  //     location: location,
  //     grades: grades,
  //     img: img,




  //   }


  //   fetch('https://d-azure.vercel.app/addSchool', {

  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },

  //     body: JSON.stringify(submit)

  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       if (data.acknowledged) {

  //         // event.target.reset()

  //       }
  //       toast.success(`New review Added !`, {
  //         position: "top-right",
  //         autoClose: 4000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });

  //     })
  //   console.log(submit)


  //   //submit



  // }

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
      <h3 className="text-left ">Rating</h3>
      <div className="rating rating-xs ml-2 mt-2">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  
</div>
<button className='ml-2 btn btn-sm'>see</button>
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
</div>

      <Silver d={d} ></Silver>


      <ToastContainer />

    </div>
  );
};

export default Show;

