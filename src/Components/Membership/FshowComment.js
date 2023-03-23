import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { MdOutlineDateRange } from 'react-icons/md';
const FshowComment = ({numbers}) => {
 

  const [storedNumbers, setStoredNumbers] = useState([]);
const [sum, setSum] = useState(0);

 
  const {user,loading}=useContext(AuthContext)
    const date = numbers?.date?.slice(0,10);
    const time = numbers?.date?.slice(11,19);
// 
 


console.log('rating',numbers.rating)
    
   


    return (
        <div className='text-white mb-4'>

<div className=" card w-60 lg:w-96 bg-base-100 text-gray text-black shadow-xl">
  {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">
      
    <CgProfile/>
    Parent 
    
      <div className=" text-sm">{user?.email}</div>
  {/* rating  start*/}
  
    </h2>
    

    <p className='text-justify text-left '> {numbers.comment}</p>
    <div className="card-actions justify-end">
      <div className="">
        
{
        numbers.selectedOption==='yes' ?

      <>😇
      </>
      :
      <></>
      
      
      
}
{
        numbers.selectedOption==='no' ?

      <>😈
      </>
      :
      <>😃</>
      
      
      
}
</div> 
      <div className="badge badge-outline"><AiOutlineFieldTime/> {time}</div>
    </div>
  </div>
  
</div>
          
         
          
          <h1 className='text-red-400'> </h1>
          


        </div>
    );
};

export default FshowComment;