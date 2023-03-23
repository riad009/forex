import React from 'react';
import { Link } from 'react-router-dom';
import find from '../../assets/wave-6.json'
import Lottie from "lottie-react"
const ShowRankSchool = ({d}) => {
    return (
      // style={{opacity: "0.8"}}
        <div className='hand'>
        
            <div style={{opacity: "0.9"}}  className="card  w-96 glass ">
                
    
                 <figure><img src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=2000" alt="Shoes" /></figure>
                
   <div className=" card-body">
    <h2 className="card-title">
    <Link className='hover:underline bg:text-blue-400' to={`/school/${d.school}`} >  {d.schoolName}  </Link>
      <div className="badge badge-secondary">Top school </div>  
    </h2>
    <p> 
</p>
    <div className="card-actions justify-end">
    <div className='justify-self-center w-16'><Lottie animationData={find} /></div>
      <div className="">{d.grades}</div> 
      <div className="">{d.location}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowRankSchool;