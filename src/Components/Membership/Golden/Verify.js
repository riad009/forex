import React from 'react';
import { GoVerified } from 'react-icons/go';

const Verify = ({d}) => {
    return (
        <div>
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

export default Verify;