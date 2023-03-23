import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthProvider';
import './Filter.css'
import SchoolShow from './SchoolShow';
import { MdDeleteForever } from 'react-icons/md';
import { FcBearish } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import { FcApproval } from 'react-icons/fc';

const Filter = () => {
    const [schools, setSchools] = useState([]);
    console.log('salaryrange ',schools)
    const [feature, setfeature] = useState([]);
    const {user,loading}=useContext(AuthContext)
    const [admin,setAdmin]=useState([])
    
 //new
 const [allschool,setallschool]=useState([]);
 const [newfilterfesture,setnewfilterfesture]=useState([]);


 useEffect(()=>{
   fetch('https://d-azure.vercel.app/getallschool')
   
   .then(res=>res.json())
   .then(data=>setallschool(data))
         
   
       },
       
       [])
      
       // filter

// Filter schools where feature array contains at least one of the features in featureToFilter
const filteredSchools = allschool.filter(school => feature.some(feature => school.schoolType.includes(feature)));

const filteredSchools2 = allschool.filter(school => 
  (!filteredSchools[0]?.schoolType || school.schoolType === filteredSchools[0].schoolType) && 
  (!schools[0]?.salaryrange || school.salaryrange === schools[0].salaryrange)
);
// uniqueSchoolTypes
console.log('feature',feature)

// Set the state with the filtered schools

       //  filter


//refined search
// const filteredSchools2 = [  { name: 'School A', schoolType: 'Sports', salary: 50000 },  { name: 'School B', schoolType: 'Music', salary: 60000 },  { name: 'School C', schoolType: 'Sports', salary: 70000 },  { name: 'School D', schoolType: 'Arts', salary: 80000 },];

// const schools2 = [  { schoolType: 'Sports', salaryRange: [40000, 60000] },
//   { schoolType: 'Music', salaryRange: [50000, 70000] },
//   { schoolType: 'Arts', salaryRange: [700004, 490000] },
// ];








//refined search

//admin
useEffect(()=>{

    fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=> setAdmin(data))

},[user?.email])
  
    useEffect(() => {
      const schoolsFromStorage = localStorage.getItem('schools');
      
      if (schoolsFromStorage) {
        const parsedSchools = JSON.parse(schoolsFromStorage);
        setSchools(parsedSchools);
      }
    }, []);
    useEffect(() => {
        const schoolsFromStorage = localStorage.getItem('feature');
        
        if (schoolsFromStorage) {
          const parsedSchools = JSON.parse(schoolsFromStorage);
          setfeature(parsedSchools);
        }
      }, []);

    //filter
    //filter
  //  delete
 
  
  const handleDelete=(d)=>{
    
    var answer = window.confirm("Delete this school?");
   if(answer){


    fetch(`https://d-azure.vercel.app/deletearea/${d._id}`,{
    
    
    method: 'DELETE'
    
    })
    .then(res=>res.json)
    .then(er=>console.error(er))
  
   

    toast.error(`school ${d.school} deleted`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        
   }
    
    }
  //   delete
  const salaryRanges = [...new Set(schools.map(schoolData => schoolData.salaryrange))];
  
  const uniqueSchoolTypes = [...new Set(filteredSchools.map(schoolData => schoolData.schoolType))];
 
  

 
   
    return (
        <div>
          
    <div className='m-6 font-bold not-italic antialiased'>
    
   <section>
   <p className='flex'>
   
    <p className=' mr-1 text-2xl'><FcBearish/> </p>
    
    {salaryRanges.map((salaryRange, index) => (
      <p key={index}>{salaryRange}
      </p>
    ))}
    <p>
      
    </p>
    </p>
   </section>
{/*  */}
<section>
   <p className='mt-2  flex'>
   <p className=' mr-1 text-2xl'><FcApproval/> </p>
 <p >
 {
  feature.map(d=><h1 className='italic border  text-left'>{d}</h1>)
 }
 </p>
   {/* {uniqueSchoolTypes.map((uniqueSchoolTypes, index) => (
      <p key={index}>{uniqueSchoolTypes}
      </p>
    ))} */}
    </p>
   </section>
  </div>

            <table id="customers">
  <thead>
    <tr>
      <th>No</th>
      <th style={{width: '65%'}}>School</th>
      <th style={{width: '15%'}}>City</th>
      <th style={{width: '15%'}}>Grades</th>
     
      <th style={{width: '5%'}}>Rule</th>
     
      
    </tr>
  </thead>
  <tbody>
    {filteredSchools2.map((d, i) => (
      <tr key={i}>
        <td>{i+1}</td>
        <td style={{textAlign: 'start'}}>


        <Link className='hover:underline hover:text-blue-400  p-2   text-left'to={`/school/${d.school}`} >  {d.schoolName} </Link>
        </td>
        <td>{d.city}</td>
        
        <td>{d.grades} </td>
        {/* <td>{d.students} </td> */}
        <td>
        <div>
        {


admin.map(s=>  <h1>

{

s.accountType=="admin" || s.accountType=="moderator" || s.accountType=="silver" ||  s.accountType=="golden" ?
<> 


{
 
}
<p> 
<p onClick={() => handleDelete(d)} className=""> <p className='text-2xl text-yellow-400'><MdDeleteForever/></p> </p>

 </p>   

</>
:
<>

</>
  }
  
</h1>)
}
   </div>
        </td>
       
 
      </tr>
    ))}
    {/*  */}
    {/* {filteredSchools.map((d, i) => (
      <tr key={i}>
        <td>{i+1}</td>
        <td style={{textAlign: 'start'}}>


        <Link className='hover:underline hover:text-blue-400  p-2   text-left' to={`/school/${d.school}`} >  {d.schoolName} </Link>
        </td>
        <td>{d.city}</td>
        <td> {d.grades}</td>
       
        <td>
        <div>
        {


admin.map(s=>  <h1>

{

s.accountType=="admin" || s.accountType=="moderator" || s.accountType=="silver" ||  s.accountType=="golden" ?
<> 


{
 
}
<p> 
<p onClick={() => handleDelete(d)} className=""> <p className='text-2xl text-yellow-400'><MdDeleteForever/></p> </p>

 </p>   

</>
:
<>

</>
  }
  
</h1>)
}
   </div>
        </td>
       
 
      </tr>
    ))} */}
  </tbody>
</table>


        </div>
    );
};

export default Filter;