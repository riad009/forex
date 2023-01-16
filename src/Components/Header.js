import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth/AuthProvider';
import { CgProfile } from 'react-icons/cg';
import { FaSearchengin } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { RiFindReplaceLine } from 'react-icons/ri';
import Area from './School/Area';


const Header = ({children}) => {
  const navigate=useNavigate()
  
  const {logout}=useContext(AuthContext)
  const {user,loading}=useContext(AuthContext)
  const [show,setShow]=useState([])
  const [admin,setAdmin]=useState([])
  

  useEffect(()=>{

    fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
  
    .then(res=>res.json())
    .then(data=> setShow(data))

},[user?.email])


//admin
useEffect(()=>{

    fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=> setAdmin(data))

},[user?.email])

//all seller
if(loading){
  return <div><h2>loading</h2></div>
}

  const handleLogout=(auth)=>{

    var answer = window.confirm("Log out?");
if (answer) {
  logout(auth)
  navigate("/login")

}
else {
    //some code
}
   

  }
    return (
        <div className='shadow-2xl '>



           <div className="navbar bg-blue-800 shadow-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
        {/*  phone start */}
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
   
      {

  
user?.email ?
<> 
<Link to={'/'}> <li>  <button><a className='btn btn-outline btn-info'>Home</a></button> </li></Link>
<Link to={'/school'}> <li>  <button><a className='btn btn-outline btn-info'>Find School</a></button> </li></Link>

     
     
     

<li> <button onClick={handleLogout} className='btn btn-outline btn-info'>logout </button></li></>
:
<>
<Link to={'/'}> <li>  <button><a className='btn btn-outline btn-info'><AiOutlineHome/>  Home</a></button> </li></Link>
<Link to={'/school'}> <li>  <button><a className='btn btn-outline btn-info'>Find School</a></button> </li></Link>
<Link to={'/login'}> <li>  <button><a className='btn btn-outline btn-info'> Login </a></button> </li></Link>
    


{/* 
          <li tabIndex={0}>
          <a className="justify-between">
            Admin control
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>moderator</a></li>
            <li><a>Data</a></li>
          </ul>
        </li> */}
      
        </>
    }
      </ul>
    </div>
    <a className="text-white btn btn-ghost normal-case text-xl"><FaSearchengin/> BSpk </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">



      {/* ///////////////////////////// */}

    
      {/*  */}
      
      {/*  pc start */}
 


     {

  
user?.email ?
<> 
<Link to={'/'}> <li><a className='text-white'>Home</a></li></Link>
     <Link to={'/school'}> <li><a className='text-white'>Find School</a></li></Link>
     
     

<li> <button onClick={handleLogout} className='btn btn-outline btn-info'>logout </button></li>

</>

:
<>
<Link to={'/'}> <li><a className='text-white'><AiOutlineHome/> Home</a></li></Link>
     <Link to={'/school'}> <li><a className='text-white'><RiFindReplaceLine/>  Find School</a></li></Link>
     <Link to={'/login'}> <li><a className='text-white'>Login</a></li></Link>
    


</>
    }

    
      {/* <li><a>Item 3</a></li> */}
    </ul>
     {/*  pc end */}
  </div>
  <div className="navbar-end">
    {/* modal */}
    
      {/* The button to open modal */}
      

      {/*  */}
      
{/* admin  */}
      {


admin.map(s=>  <h1>

   

      {

s.accountType=="admin" || s.accountType=="moderator" ?
<> 


<div className='flex'>

<p className='text-white  mr-3'>
  
<div className="avatar placeholder">

  <div className="bg-blue-600 text-neutral-content rounded-full w-12">
   <span>{s.name}</span>
  </div>
</div>
  </p>


{

s.accountType=="admin"?
<> 
<label htmlFor="my-modal-3" className="btn btn-outline btn-info">Admin</label>  

</>
:
<>
<label htmlFor="my-modal-3" className="btn btn-outline btn-info">Moderator</label>
</>
    }
    
</div>

</>
:
<>

</>
    }
    </h1>   )

}

{/* moderator  */}





{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal ">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold flex justify-center  justify-evenly">Hello  
    {

      admin.map(s=> <h1>

{

s.accountType=="admin"?
<> 
Admin

</>
:
<>
Moderator
</>
    }

      </h1>)
    }

    
    
 {
admin.map(s=>  <h1>

<p className='flex'> <p className='mt-1 mr-2'><CgProfile/></p> {s.name} </p>
</h1>   )



    } 
     </h3>
     <hr />
     <hr />
    <div className='mt-4'>
   {/* admin */}
   

 
   <a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminarticle'}> Article post</Link></a>
   <a className='btn btn-outline btn-error btn-sm m-2'> <Link to={'/darticle'}> Delete Article</Link></a>
   <a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminschool'}> Add school</Link></a>

   {

admin.map(s=> <h1>

{

s.accountType=="admin"?
<> 
<a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminmoderator'}> User control</Link></a>


</>
:
<>

</>
}

</h1>)
}

  
   {/* admin */}
    
     
    </div>
    <hr />
    <p className="py-4">You have been selected as an administrator. Now you can manage this system</p>
  </div>
</div>
      {/* modal */}
  </div>
</div>
        </div>
    );
};

export default Header;