import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth/AuthProvider';
import { CgProfile } from 'react-icons/cg';
import { FaSearchengin } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { RiFindReplaceLine } from 'react-icons/ri';
import { GoVerified } from 'react-icons/go';
import { GiMoebiusStar } from 'react-icons/gi';
import Area from './School/Area';


const Header = ({children}) => {

  const navigate=useNavigate()
  const handleAddYourSchool=()=>{


    alert('please login with your principle \naccount to add your school')
    navigate('/login')

  }
  
  
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
// if(loading){
//   return <div><h2>loading</h2></div>
// }

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
        <div className=' shadow-2xl '>

           <div className="navbar   bg-blue-800 shadow-2xl">



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
<li>  <button> <a onClick={handleAddYourSchool} className='btn btn-outline btn-info'>Add Your School</a> </button> </li>
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
    <a className="text-white btn btn-ghost normal-case text-xl"><FaSearchengin/> Best school in pakistan</a>
  

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
 <li onClick={handleAddYourSchool}><a className='text-white'>Add Your School</a></li>
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

s.accountType=='golden' ?
<p className='text-yellow-400 p-4' > <GiMoebiusStar/> </p>
:
<></>

}

      {

s.accountType=="admin" || s.accountType=="moderator" ||  s.accountType=="principle" ?
<> 


<div className='flex'>

<p className='text-white  mr-3'>
  
<div className="avatar placeholder">

  <div className="bg-blue-600 text-neutral-content rounded-full w-12">
   <span>{s.name}</span>
  </div>
</div>
  </p>

{/* admim role */}
{

s.accountType=="admin"?
<> 
<label htmlFor="my-modal-3" className="btn btn-outline btn-info">Admin</label>  

</>
:
<>
</>
}
{/* moderator role */}
{

s.accountType=="moderator"?
<> 
<label htmlFor="my-modal-3" className="btn btn-outline btn-info">Moderator</label>  

</>
:
<>
</>
}
{/* princple role */}
{

s.accountType=="principle"?
<> 
<label htmlFor="my-modal-3" className="btn btn-outline btn-info">principle</label>  

</>
:
<>
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
</>
    }
{

s.accountType=="moderator"?
<> 
moderator

</>
:
<>

</>
    }
{

s.accountType=="principle"?
<> 
principle

</>
:
<>

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
   
   

   {/* // admin role */}

   {

admin.map(s=> <h1>

{

s.accountType=="admin"?
<> 
<a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminmoderator'}> User control</Link></a>
<a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminarticle'}> Article post</Link></a>
    <a className='btn btn-outline btn-success btn-sm m-2'> <Link to={'/darticle'}> Edit / Delete Article</Link></a>
    <a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminschool'}> Add school</Link></a>
    <a className='btn btn-outline btn-primary btn-sm m-2'> <Link to={'/GiveAds'}> Advertiesment Control panel</Link></a>



</>
:
<>

</>
}

</h1>)
}
   {/* // moderator role */}

   {

admin.map(s=> <h1>

{

s.accountType=="moderator"?
<> 
<a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminmoderator'}>User control </Link></a>
<a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminarticle'}> Article post</Link></a>
    <a className='btn btn-outline btn-success btn-sm m-2'> <Link to={'/darticle'}> Edit / Delete Article</Link></a>
    <a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminschool'}> Add school</Link></a>



</>
:
<>

</>
}

</h1>)
}
   {/* // principle role */}

   {

admin.map(s=> <h1>

{

s.accountType=="principle"?
<> 

    <a className='btn btn-outline btn-info btn-sm m-2'> <Link to={'/adminschool'}> Add school</Link></a>



</>
:
<>

</>
}

</h1>)
}

  
 
    
     
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