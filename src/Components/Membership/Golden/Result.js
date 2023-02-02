import React from 'react';

const Result = ({d}) => {
    return (
        <div>
             <section className=' rounded shadow-2xl bg-[#FFFFFF]  '>
  
  <div className='my-3 flex justify-evenly'>
  <h1 className='  ' >Math test scores</h1>
  
  <div className="text-sm  radial-progress text-success"style={{ "--value": "70", "--size": "3rem",  }}>{d.math}%</div>
  </div>
  
 <hr />
  
  <div className='my-3 flex justify-evenly'>
  <h1 className='  ' >Math test scores</h1>
  <div className="text-sm  radial-progress text-success"style={{ "--value": "70", "--size": "3rem", }}>{d.reading}%</div>
 
   </div>
  
 <hr />
  
  <div className='my-3 flex justify-evenly'>
  <h1 className=' ' >Student : Teacher ratio</h1>
    <h1>  {d.ratio} </h1>
  </div>
  
 <hr />
  
 
            </section>
        </div>
    );
};

export default Result;