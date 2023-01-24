import React, { useEffect, useState } from 'react';
import './Home.css'
import school from '../assets/school.json'
import sc from '../assets/sc.json'
import world from '../assets/world.json'
import city from '../assets/city.json'
import line from '../assets/line-2.json'
import find from '../assets/find-water.json'
import Lottie from "lottie-react"
import Article from './article/Article';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FeaturesSchool from './SearchSchool/FeaturesSchool';
import SHome from './Home/SHome';
import { MdLocationOn } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

const Home = () => {
  

  const [searchSchool, setSearchSchool] = useState([]);
  const [schoolfeatures, setschoolfeatures] = useState(""); //get name from select option
  const [Towschoolfeatures, setTowschoolfeatures] = useState([]) //get name from database

  const [salaryRangeSchool, setsalaryRangeSchool] = useState(""); //get name from select option
  const [towsalaryRangeSchool, setTowsalaryRangeSchool] = useState([]) //get name from database



  const [schoolname, setSchoolName] = useState("")
 

 //town search
 const [town, settown] = useState(""); //get name from select option
  const [towtown, settowtown] = useState([]) //get name from database

 


  let limitSchool;
  if (schoolname.length > 3) {

    limitSchool = schoolname?.slice(0, 3);
  }

  const handlSearch = (e) => {
  

   

  }


//feature school

useEffect(()=>{

  fetch(`https://d-azure.vercel.app/schoolfeature/${schoolfeatures}`)
.then(res => res.json())
 .then(data => {
  setTowschoolfeatures(data)
 


  })
},[schoolfeatures])


//school search
useEffect(() => {

fetch(`https://d-azure.vercel.app/serachSchool/${schoolname}`)
//  fetch(`http://localhost:5000/searchSChool?searchWord=${schoolname}`)
.then(res => res.json())
.then(data => {
setSearchSchool(data)
// console.log('tow', data)


})

}, [schoolname])


//town search
useEffect(() => {

  fetch(`https://d-azure.vercel.app/serachtown/${town}`)
  //  fetch(`http://localhost:5000/searchSChool?searchWord=${schoolname}`)
  .then(res => res.json())
  .then(data => {
    console.log('data',data)
  settowtown(data)
  // console.log('tow', data)
  
  
  })
  
  }, [town])
  
console.log('town',town)
//salary range

useEffect(() => {

fetch(`https://d-azure.vercel.app/salaryrange/${salaryRangeSchool}`)
//  fetch(`http://localhost:5000/searchSChool?searchWord=${schoolname}`)
.then(res => res.json())
.then(data => {
  setTowsalaryRangeSchool(data)
// console.log('tow', data)


})

}, [salaryRangeSchool])



//school features
// useEffect(() => {

//   fetch(`http://localhost:5000/setschoolfeatures/${schoolfeatures}`)
//   //  fetch(`http://localhost:5000/searchSChool?searchWord=${schoolname}`)
//   .then(res => res.json())
//   .then(data => {
//     setschoolfeatures(data)
//   // console.log('tow', data)
  
  
//   })
  
//   }, [schoolfeatures])

  return (
<div className='okk ' >
{/* {


Towschoolfeatures.map(sc=>
   <h1>

  {sc.school}
<FeaturesSchool key={sc._id} sc={sc} > 
   
   </FeaturesSchool>
   </h1>
   
  
)

} */}

<div className='banner' >

 <div className='divide flex '>
<div className='left'>
<div className='justify-self-center w-96'><Lottie animationData={city} /></div>
</div>

<div className='mobile  right  text-xl '>
<h1 className='pc mt-4 text-2xl font-mono  font-bold '>locate the school</h1>

<h1 className='pc mt-3 font-bold text-3xl '>THAT IS MOST SUITABLE FOR YOU</h1>

<h1 className=' mt-2 text-2xl'>Finding the right school shouldn’t be hard. From play group to high school. <br /> We make it simple to find and connect with the finest ones for you.</h1>
<div className='justify-center '>


{/* search */}

<section className='flex mt-8 grid sm:grid-cols-4 md:grid-cols-4 gap-2 '>
  {/*  */}
  <div>

<input onChange={(event) => setSchoolName(event.target.value)} type="text" placeholder="school name " className="input input-bordered w-48 max-w-xs" />

  {
 schoolname.length ?   <div className=" ml-4 mr-4 mt-1 shadow-xl border-4  bg-primary-content text-black text-sm justify-left text-white h-48 overflow-y-scroll flex flex-col">
   
{
 searchSchool.map((sc) =>
   <Link className='hover:bg-gray-200  p-2   text-left' to={`/school/${sc._id}`} >  <p className='flex justify-evenly'>{sc.school} <p className='text-xs ml-2 text-slate-500'>  <p className='flex mt-1'><p className='mt-1'><CiLocationOn/></p> {sc.city}</p>    </p> </p> </Link>)

  }
 </div>
  :
 <></>
   }
 </div>

 <div>

<input onChange={(event) => settown(event.target.value)} type="text" placeholder="Search by town " className="input input-bordered w-48 max-w-xs" />

  {
 town.length ?   <div className=" ml-4 mr-4 mt-1 shadow-xl border-4  bg-primary-content text-black text-sm justify-left text-white h-48 overflow-y-scroll flex flex-col">
   
{
 towtown.map((sc) =>
   <Link className='hover:bg-gray-200  p-2   text-left' to={`/school/${sc._id}`} >  {sc.school} </Link>)

  }
 </div>
  :
 <></>
   }
 </div>
{/*  */}
 <div>
 <select onClick={(e)=>setsalaryRangeSchool (e.target.value) }   className=" select-info  select w-40  ">
  <option  disabled selected >School fees</option>
  
  <option className='bg-red-400' value='close all'> close all </option>
  <option value='0 to 1000'> 0 to 1000 </option>
 <option value='1001 to 2500'>  1001 to 2500 </option>
 <option value='2500 to 5000'>  2500 to 5000 </option>
 <option value='5001 to 10000'>  5001 to 10000 </option>
 <option value='100001 to 30000'>  100001 to 30000</option>
  
</select>
<div>


  {
 towsalaryRangeSchool.length ?   <div className=" ml-6 mr-6 shadow-xl border-4  bg-primary-content text-black text-sm justify-left text-white h-48 overflow-y-scroll  flex flex-col">
   
{
 towsalaryRangeSchool.map((sc) =>
   <Link className='hover:bg-gray-200  p-2   text-left' to={`/school/${sc._id}`} >  {sc.school} </Link>)

  }
 </div>
  :
 <>
</>
   }
 </div>
</div>

  
<div>

  
<select onClick={(e)=>setschoolfeatures (e.target.value) }   className=" select-info  select w-40  ">
  <option  disabled selected >school features</option>
  
 <option className='bg-red-400' value='close all'>Close All</option>
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

<div>


  {
 Towschoolfeatures.length ?   <div className=" ml-6 mr-6 shadow-xl border-4  bg-primary-content text-black text-sm justify-left text-white h-48 overflow-y-scroll  flex flex-col">
   
{
 Towschoolfeatures.map((sc) =>
   <Link className='hover:bg-gray-200  p-2   text-left' to={`/school/${sc._id}`} >  {sc.school} </Link>)

  }
 </div>
  :
 <>
</>
   }
 </div>

   </div>
   
  </section>

    {/* search */}

  <div className='flex justify-center'>

  <button  className=" pc mt-5 btn btn-active bg-green-600 mt-12 ">  <Link to='school'>Locate school </Link></button>

   <div className='justify-self-center w-40'><Lottie animationData={find} /></div>
  </div>

  </div>

 </div>

 </div>

  <svg className='svg block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45"><path fill="#FFFFFF" fill-opacity="1" d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path></svg>

     </div>
     <SHome></SHome>
     <Article></Article>

    </div>
  );
};

export default Home;

