import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsPieChart,pie,tooltip } from 'react-icons/bs';
import Chart from "react-apexcharts";
import Graph from './Graph';
import { BarChart, XAxis, YAxis } from 'recharts';
import { Bar } from 'react-chartjs-2';
import { Tooltip } from 'chart.js';
const ShowCompare = () => {

const [state ,setstate] =useState({

    
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
      }



)
    const detail = useLoaderData()

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


  const [categories,setCategories]=useState([]);  //saved compare
   

  useEffect(()=>{
      fetch('https://d-azure.vercel.app/saveCompareGet')
      .then(res=>res.json())
      .then(data=>setCategories(data))
      
      
          },
          [])

    return (
        <div>


{

//prrvius compare save data
categories.map(d=> <div className="">
  
   {/* <div className="h-60 m-2  bg-[#19496F] text-white rounded-box "> */}

 <h2 className='text-left text-xl text-font shadow-xl p-2'>your saved school for compare</h2>
<table>
<div style={{
      border: '2px solid gray',
      padding: '2px',
      margin: '10px',
      width: '100%',
     
  }}>
    
    <tr className=' bg-gray-200 p-4 flex justify-between' >
  <p className=' text-red-400 font-bold text-xl'>{d.school}</p>

  <p className=''>{d.students} Students </p>
  <p className=''>💵{d.salaryrange}</p>
  <p className=''> ★{d.schoolType}</p>
  

</tr>
</div>
{/* //table1 */}
<div style={{
      border: '1px solid gray',
      padding: '5px',
      margin: '10px',
      width: '100%',
     
  }}>
    
<tr >
<section className='text-left pl-4 rounded   grid lg:grid-cols-2 py-12 mb-6 grid-cols-1 '>
             <div className='text-center mb-4'>
             <div className="avatar placeholder">
  <div className="bg-[#409126] text-white rounded-full w-16">
    <span className="text-xl font-bold">{d.grades} </span>
    
  </div>
</div>
<h1>Overall School Grade</h1> <p className='text-sm'>How are grades calculated?
Data Sources</p>      </div>
             {/*  */}
             <div className='justify-evenly gap-2 grid grid-cols-2'>
            
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.Academicsgd}</span>
  </div>
</div> Academics  </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.Teachersgd }</span>
  </div>
</div> Teachers  </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.ClubsActivitiesgd}</span>
  </div>
</div> Clubs & Activities  </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.Diversitygd}</span>
  </div>
</div> Diversity  </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.CollegePrepgd}</span>
  </div>
</div> College Prep </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.Sportsgd}</span>
  </div>
</div> Sports  </h1>
{/*  */}
           
             </div>
   
    </section>
</tr>
</div>
{/* //table1 */}


</table>





  {/* </div>  */}
  

     
     
</div> )
  }
            
          {

//new compare 
detail.map(d=>  <h1>

<div className=" m-2  bg-gray-200 rounded-box ">

<h2 className='text-left text-xl text-font shadow-xl p-2 flex'>New compare

{/* //modal */}
{/* The button to open modal */}
<label htmlFor="my-modal-6" className=" ml-8 btn btn-sm btn-primary">Compare to ?</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Please search the school name that you want to compare</h3>
  
  {/* search */}
  <div>

<input onChange={(event) => setSchoolName(event.target.value)} type="text" placeholder="school name " className="text-left m-2 input input-bordered w-48 max-w-xs" />

  {
 schoolname.length ?   <div className="m-12 justify-center mt-1 shadow-xl border-4  bg-primary-content text-black text-sm justify-left text-white h-48 overflow-y-scroll flex flex-col">
   
{
 searchSchool.map((sc) =>
  //  <Link className='hover:bg-gray-200  p-2   text-left' to={`/school/${sc._id}`} >  {sc.school} </Link>
   
<h1>


<Graph  sc={sc}></Graph>
<Link to={`/schoolCompareShow/${sc._id}`} className='hover:text-blue-400  hover:underline p-2 text-xl  justify-between mt-2 ' > {sc.school}</Link>



</h1>
   ) }
 </div>
  :
 <> </>
   }
 </div>
  
   </div>
</div>
{/*  */}

</h2>

<table>
<div style={{
      border: '2px solid gray',
      padding: '2px',
      margin: '10px',
      width: '100%',
     
  }}>
    
    <tr className=' bg-gray-200 p-4 flex justify-between' >
  <p className=' text-red-400 font-bold text-xl'>{d.school}</p>

  <p className=''>{d.students} Students </p>
  <p className=''>💵{d.salaryrange}</p>
  <p className=''> ★{d.schoolType}</p>
  

</tr>
</div>
{/* //table1 */}
<div style={{
      border: '1px solid gray',
      padding: '5px',
      margin: '10px',
      width: '100%',
     
  }}>
    
<tr >
<section className=' text-left pl-4 rounded  bg-gray-200 grid lg:grid-cols-2 py-12 mb-6 grid-cols-1 '>
             <div className='text-center mb-4'>
             <div className="avatar placeholder">
  <div className="bg-[#409126] text-white rounded-full w-16">
    <span className="text-xl font-bold">{d.grades} </span>
    
  </div>
</div>
<h1>Overall School Grade</h1> <p className='text-sm'>How are grades calculated?
Data Sources</p>      </div>
             {/*  */}
             <div className='justify-evenly gap-2 grid grid-cols-2'>
            
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.Academicsgd}</span>
  </div>
</div> Academics  </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.Teachersgd }</span>
  </div>
</div> Teachers  </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.ClubsActivitiesgd}</span>
  </div>
</div> Clubs & Activities  </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.Diversitygd}</span>
  </div>
</div> Diversity  </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.CollegePrepgd}</span>
  </div>
</div> College Prep </h1>
{/*  */}
            <h1><div className="avatar placeholder">
  <div className="bg-[#CDE9C1] text-green-800 rounded-full w-8">
    <span className="text-xs font-bold ">{d.Sportsgd}</span>
  </div>
</div> Sports  </h1>
{/*  */}
           
             </div>
   
    </section>
</tr>
</div>
{/* //table1 */}


</table>



 </div> 
 {/* grades */}

</h1>)
}
{/* //chart */}
{/* <section>
<Chart
              options={searchSchool.students}
              series={searchSchool.school}
              type="bar"
              width="500"
            />

</section> */}
 

        </div>
    );
};

export default ShowCompare;