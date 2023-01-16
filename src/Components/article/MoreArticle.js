import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const MoreArticle = () => {

    const detail = useLoaderData()

   
    return (
        <div className='m-4'>
            {/* <h1 className="text-5xl font-bold mt-6 text-blue-400 bg-pink-100">Article Details</h1>
  */}
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={detail.img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{detail.title}</h2>
    <p className='text-left' >{detail.details}</p>
    <div className="card-actions justify-end">
     <Link to={'/'} > <button className="btn btn-primary">Back</button></Link>
    </div>
  </div>
</div>

        </div>
    );
};

export default MoreArticle;