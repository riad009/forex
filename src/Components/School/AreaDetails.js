import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Navigate, NavLink, unstable_HistoryRouter, useLoaderData, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Auth/AuthProvider';
import SchoolPage from '../SchoolPage/SchoolPage';
import Show from '../SchoolPage/Show';
import './AreaDetail.css'


const AreaDetails = ({d,i,handleCompare,limit,setlimit}) => {
 
 

  const navigate=useNavigate()

  const handleCompareError=()=>{


    alert("Pleae login for compare")
    navigate('/login')
  }
  
console.log(handleCompare)
  

  
  const currentPathname = window.location.pathname;
  
  const {user,loading}=useContext(AuthContext)
  const [admin,setAdmin]=useState([])

  useEffect(()=>{

    fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=> setAdmin(data))

},[user?.email])
  const handleDelete=()=>{
    
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
    
    
    return (
        <div>
            <h2> </h2>
         
            <div className="overflow-x-auto mt-12  m-2 ">
  <table className="table w-full">
   
    <thead>
      <tr>
        
        <th></th>
       
        <th style={{ width: '70%' }}>Name</th>
        <th style={{ width: '15%' }}>Location</th>
        <th style={{ width: '15%' }}>Students</th>
       
        <th></th>
        
      </tr>
    </thead>
    <tbody>
     
      <tr>
         <th className='m2'> {i}</th>
        <td><button className="btn btn-outline btn-primary btn-sm "><Link to={`/school/${d.school}`} >{d.schoolName}</Link></button>
   </td>
        <td>{d.location}</td>
        <td>{d.students}</td>
       
       
    

        {


admin.map(s=>  <h1>

{

s.accountType=="admin" || s.accountType=="moderator" || s.accountType=="silver" ||  s.accountType=="golden" ?
<> 


{
 
}
<td> <button onClick={handleDelete}  className="btn btn-outline btn-warning">Delete School </button>
     </td>   

</>
:
<>

</>
  }
  
</h1>)
}
      


      </tr>
      
      
      
    </tbody>
  </table>

 
</div>
<ToastContainer/>
        </div>
    );
};

export default AreaDetails;