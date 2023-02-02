import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CommentShowArticle = ({d}) => {

    const date = d?.date?.slice(0,10);
    const time = d?.date?.slice(11,19);
    return (
        <div>
            
            <div className="card w-96 bg-gray-100 mb-4 justify-center ">
  {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">
      <h2>{d.email}</h2>
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p className='text-left'> {d.comment} </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{date}</div> 
      <div className="badge badge-outline">{time}</div> 
     
    </div>
  </div>
</div>
        </div>
    );
};

export default CommentShowArticle;