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
categories.map(p=> <div className="">
  

  
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
<Link to={`/schoolCompareShow/${sc.school}`} className='hover:text-blue-400  hover:underline p-2 text-xl  justify-between mt-2 ' > {sc.school}</Link>



</h1>
   ) }
 </div>
  :
 <> </>
   }
 </div>
  
   </div>
</div>


</h2>

{/*  */}

<div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>school</th>
        <th>{d.school}</th>
        <th>{p.school}</th>
      </tr>
    </thead>
    <tbody>
    
      <tr >
        <th>Students</th>
        <td>{d.students}</td>
        <td>{p.students}</td>
      </tr>
      <tr className="active">
        <th>Total teacher</th>
        <td>{d.totalteachers}</td>
        <td>{p.totalteachers}</td>
      
      </tr>
     
      <tr >
        <th>Grades</th>
        <td>{d.grades}</td>
        <td>{p.grades}</td>
      
      </tr>
     
      
      <tr className="active">
        <th>Salary range</th>
        <td>{d.salaryrange}</td>
        <td>{p.salaryrange} </td>
      </tr>
      <tr>
        <th>School features</th>
        <td>{d.schoolType }</td>
        <td>{p.schoolType} </td>
      </tr>
      
      <tr className="active">
        <th>Reading language language</th>
        <td> <div className="text-sm  radial-progress text-success"style={{ "--value": "70", "--size": "3rem", }}>{d.reading}%</div>
 </td>
        <td> <div className="text-sm  radial-progress text-success"style={{ "--value": "70", "--size": "3rem", }}>{p.reading}%</div>
 </td>
      </tr>
      <tr>
        
        <th>Math test scores</th>
        <td> <div className="text-sm  radial-progress text-success"style={{ "--value": "70", "--size": "3rem", }}>{d.math}%</div>
 </td>
        <td> <div className="text-sm  radial-progress text-success"style={{ "--value": "70", "--size": "3rem", }}>{p.math}%</div>
 </td>
      </tr>
     
      <tr className="active">

        <th>Student:faculty ratio</th>
        <td> {d.ratio}</td>
        <td> {p.ratio}</td>
      </tr>
     
      <tr >
        <th>Ratings</th>
        <td>{d.rating}</td>
        <td>{p.rating}</td>
      
      </tr>
    </tbody>
  </table>
</div>
{/*  */}



 </div> 


</h1>)

}

     
</div> )
  }


 

        </div>
    );
};

export default ShowCompare;