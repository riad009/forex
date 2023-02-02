import React, { useEffect, useState } from 'react';
import { GoVerified } from 'react-icons/go';

const Golden = ({d}) => {
   console.log('golden',d)

   
    return (
        <div>
            <section className='text-left pl-4 rounded shadow-2xl bg-[#FFFFFF] grid lg:grid-cols-2 py-12 mb-6 grid-cols-1 '>
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
            {/* table for scores */}
            <section className=' rounded shadow-2xl bg-[#FFFFFF]  '>
  
 <div className='my-3 flex justify-evenly'>
 <h1 className='  ' >Math test scores</h1>
 
 <div className="text-sm  radial-progress text-success"style={{ "--value": "70", "--size": "3rem",  }}>{d.math}%</div>
 </div>
 
<hr />
 
 <div className='my-3 flex justify-evenly'>
 <h1 className='  ' >Reading language</h1>
 <div className="text-sm  radial-progress text-success"style={{ "--value": "70", "--size": "3rem", }}>{d.reading}%</div>

  </div>
 
<hr />
 
 <div className='my-3 flex justify-evenly'>
 <h1 className=' ' >Student : Teacher ratio</h1>
   <h1>  {d.ratio} </h1>
 </div>
 
<hr />
 

           </section>
{/* table for scores */}

{/* verify sign */}
<section className='grid lg:grid-cols-2 sm:grid-cols-1 bg-[#FFFFFF] py-5 my-4 '>

<div className='mb-2'>
<hr /> <hr /> 
<h1 className='flex'> Year established : {d.yearestablished} <p className='text-blue-400 ml-2 '>
    {
       d.selectedestablished ==='verify' ?
       <>
       <GoVerified/>
       </>
       :
       <></>
    }
    
    </p> </h1>

</div>

{/*  */}
<div className='mb-2'>
<hr /> <hr /> 
<h1 className='flex'> Total teachers : {d.totalteachers} <p className='text-blue-400 ml-2  '>
    
{
       d.selectedtotalteachers ==='verify' ?
       <>
       <GoVerified/>
       </>
       :
       <></>
    }
    </p> </h1>
</div>
{/*  */}
<div className='mb-2'>
<hr /> <hr /> 
<h1 className='flex'>  Religious Afiliation : {d.ReligiousAfiliation} <p className='text-blue-400 ml-2  '>
    
{
       d.selectedrelegios ==='verify' ?
       <>
       <GoVerified/>
       </>
       :
       <></>
    }
    
    </p> </h1>

</div>
{/*  */}
{/*  */}
<div className='mb-2'>
<hr /> <hr /> 
<h1 className='flex'>  Extra curricular : {d.Extracurricular} <p className='text-blue-400 ml-2  '>
    
{
       d.selectedcurricular ==='verify' ?
       <>
       <GoVerified/>
       </>
       :
       <></>
    }
   
   </p> </h1>

</div>
{/*  */}
{/*  */}
<div className='mb-2'>
<hr /> <hr /> 
<h1 className='flex'>  Youtube video  <p className='text-blue-400 ml-2  '>
    
{
       d.selectedYoutube ==='verify' ?
       <>
       <GoVerified/>
       </>
       :
       <></>
    }
   
   </p> </h1>

</div>
{/*  */}

{/*  */}
<div className='mb-2'>
<hr /> <hr /> 
<h1 className='flex'>  School Type : {d.schoolType} <p className='text-blue-400 ml-2  '>
    
{
       d.selectedschoolType ==='verify' ?
       <>
       <GoVerified/>
       </>
       :
       <></>
    }
   
   </p> </h1>

</div>
<hr /> <hr />
{/*  */}
</section>
        </div>
    );
};

export default Golden;