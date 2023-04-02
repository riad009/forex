import React, { useContext, useEffect, useState } from 'react';

import Article from '../article/Article';
import './Silver.css'
import '../SchoolPage/Show.css'

import {Link} from "react-scroll";
import { GrCompare } from 'react-icons/gr';
import { GiSelfLove } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import School from '../School/School';

import SilHome from './SilHome';
import Comment from './Comment';
import ShowComment from './ShowComment';
import { AuthContext } from '../Auth/AuthProvider';
import Golden from './Golden';
import { RiH1 } from 'react-icons/ri';
import Grades from './Golden/Grades';
import Result from './Golden/Result';
import Verify from './Golden/Verify';
const Silver = ({d}) => {
  console.log('gggggggggggggggggggggg',d)
  const navigate=useNavigate()
  
  const [searchSchool, setSearchSchool] = useState([]);
  const [schoolname, setSchoolName] = useState("")
  const {user}=useContext(AuthContext)

  useEffect(() => {

    fetch(`https://d-azure.vercel.app/serachSchool/${schoolname}`)
    //  fetch(`http://localhost:5000/searchSChool?searchWord=${schoolname}`)
    .then(res => res.json())
    .then(data => {
    setSearchSchool(data)
    // console.log('tow', data)
    
    
    })
    
    }, [schoolname])

   const handdleCompareError=(event)=>{

    alert('please login for compare')
    navigate('/login')
    
   }
    const handdleCompare=(event)=>{

///conmpare dbms
event.preventDefault()
    

        
    

          const submit={  
         

          //new     
          school: d.school ,
          students : d.students,
          grades : d.grades,
          //new graes
          Sportsgd: d.Sportsgd,
          CollegePrepgd: d.CollegePrepgd,
          Diversitygd: d.Diversitygd,
          ClubsActivitiesgd: d.ClubsActivitiesgd,
          Teachersgd: d.Teachersgd,
            Academicsgd: d.Academicsgd,
            reading: d.reading,
            ratio: d.ratio,
            math: d.math,
            yearestablished: d.yearestablished,
           totalteachers: d.totalteachers,
           ReligiousAfiliation: d.ReligiousAfiliation,
           Extracurricular: d.Extracurricular,

           Academicsgd: d.Academicsgd,
          reading: d.reading,
          ratio: d.ratio,
          math: d.math,
          salaryrange: d.salaryrange,
          schoolType:  d.schoolType,
          ratio: d. ratio
          
        
            
              
          }
      
        
        fetch('https://d-azure.vercel.app/saveCompare',{
          
          method: "POST",
          headers:{
           "content-type" : "application/json"
          },
          
          body: JSON.stringify(submit)
       
           })
           .then(res=>res.json())
        .then(data=>{
       
        if(data.acknowledged){
            
        event.target.reset()
       
         }
         toast.success(`compare Added !`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      
        })
      
        
          
      //submit
///conmpare dbms


      //change page
        setTimeout(()=>{
            toast.info(`choice a school for compare`, {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                // theme: "colored",
                }); 
            },1500)
     
        navigate('/schoolCompareShow/amirjan')
  // dont delete this id ( it will redirect to the data)
    }
  

       const menuItem =[
        {

    id: 3,
    title : 'youtube'
          
     },

  {

id: 4,
title : 'grades'

  },
  {

id: 5,
title : 'result'

  },
  {

id: 6,
title : 'verify'

  },
  {

 id: 7,
  title : 'comment'
    
 },
  {

 id: 8,
  title : 'reviews'
    
 },
 
 

       ]
//user golden

const [admin,setAdmin]=useState([])


//admin
useEffect(()=>{

  fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
  .then(res=>res.json())
  .then(data=> setAdmin(data))

},[user?.email])

//user golden
    
    return (
        <div className='partThreeDivide pt-12 colorDarkBlue' >
          
   <div >

   <div className="menu p-4 stackpos ">
     
    
  <ul className='  rounded'>
  




  {


user?.email ?  
<>
<button onClick={handdleCompare} className="btn  btn-info  text-white "><GiSelfLove className='text-2xl mr-2'/> Compare </button>
</>
:
<>
<button onClick={handdleCompareError} className="btn  btn-error  text-white "><GiSelfLove className='text-2xl mr-2'/> Compare </button>

</> 
}

 
   
   
    {menuItem.map( menu=>(

<li> 

<Link className="btn btn-outline btn-info m-2" to={menu.title} smooth={true} offset={-200} duration={1000}> {menu.title}</Link>


</li>

    ))


    }
    

  </ul>
   
  
   </div>
  

   </div>

  {/* middle content start */}

  {/*  */}
   <div >
    {/*  ///////////////////////////////////////////// */}
  {/* home */}


  <div className='youtube' id='3'>
   
  <SilHome d={d} ></SilHome>
  </div>
  {/* home */}
   {/* grades */}
   
  { d.membership == 'silver' || d.membership == 'gold'   ?

  <>
   <div className='grades' id='4' >
      <Grades d={d}></Grades>
     
   </div>
  
   </>
  :
  <> </>

  }
  
     
   {/* grades */}

   
  {/* result */}

 
  {  d.accountType == 'gold' ?

  <>
   <div className='result' id='5' >
      <Result d={d} ></Result>
     
   </div>
  
   </>
  :
  <> </>

  }
   
  {/* result */}



  {/* verify */}
 
  {  d.membership == 'gold'  ?

  <>
   <div className='verify' id='6' >
      <Verify d ={d} ></Verify>
     
   </div>
  
   </>
  :
  <> </>

  }
   
  {/* verify */}

   <div className='compare' id='compare'>
   
 
  </div>

   <div className='comment' id='7'>
   
  <Comment  d={d}></Comment>
  </div>
{/* 
   <div className='reviews' id='8' >
   
  <ShowComment  d={d}></ShowComment>
  </div>
  */}

    
   </div>
   {/* middle content \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ end */}
  

  

</div>


      
    );
};

export default Silver;