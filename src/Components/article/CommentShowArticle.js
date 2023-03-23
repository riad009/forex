import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Article from './Article';

const CommentShowArticle = ({d}) => {

    // const date = d?.date?.slice(0,10);
    // const time = d?.date?.slice(11,19);
    const dateStr = d.date;
    const dateObj = new Date(dateStr);
    
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    return (
        <div>
            
            <div className="mt-4 card w-96 bg-gray-100 mb-4 justify-center ">
  {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">
      <h2>{d.name}</h2>
      <hr />
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <p className='text-justify'> {d.comment} </p>
    <hr />
    <div className="card-actions justify-end">
      <div className="text-slate-500">{month} {date}, {year}</div> 
     
     
    </div>
  </div>
</div>

        </div>
    );
};

export default CommentShowArticle;