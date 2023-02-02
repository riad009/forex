// import React, { useEffect, useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';


// const Compare = () => {

//   // const detail = useLoaderData()
//   const [searchSchool, setSearchSchool] = useState([]);
//   const [schoolname, setSchoolName] = useState("")
  

//   useEffect(() => {

//     fetch(`https://d-azure.vercel.app/serachSchool/${schoolname}`)
//     //  fetch(`http://localhost:5000/searchSChool?searchWord=${schoolname}`)
//     .then(res => res.json())
//     .then(data => {
//     setSearchSchool(data)
//     // console.log('tow', data)
    
    
//     })
    
//     }, [schoolname])


//   const [categories,setCategories]=useState([]);  //saved compare
   

//   useEffect(()=>{
//       fetch('https://d-azure.vercel.app/saveCompareGet')
//       .then(res=>res.json())
//       .then(data=>setCategories(data))
      
      
//           },
//           [])

//     return (
//       <div className=''>
  

 


//   {

// //prrvius compare save data
// categories.map(d=> <div className="">
// <div className="h-52 m-2  bg-[#19496F] text-white rounded-box ">

//  <h2 className='text-left text-xl text-font shadow-xl p-2'>ccyour saved compare</h2>

//      <table>
// <div style={{
//       border: '2px solid gray',
//       padding: '2px',
//       margin: '10px',
//       width: '100%',
     
//   }}>
    
// <tr >
//   <th className='text-xl text-red-600 p-4'>School</th>

//   <td className='mr-1'>{d.school},</td>
 
//   <td className=''>{d.students} students</td>
// </tr>
// </div>

// <div style={{
//       border: '2px solid gray',
//       padding: '5px',
//       margin: '10px',
//       width: '100%',
     
//   }}>
    
// <tr >
//   <th className='text-xl text-red-600 p-4'>Gradings</th>

//   <td className=' font-bold'>{d.grades}</td>
//   <td className='ml-4'>salary:{d.salaryrange}</td>
  
 
// </tr>
// </div>



//   </table>  





//   </div>    
// </div> )
//   }


 



//   </div>
//     );
// };

// export default Compare;