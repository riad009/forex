import React from 'react';
import { Link } from 'react-router-dom';

const CardDetail = ({d}) => {
   
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl  ">


<figure><img src={d.img} alt="Picture" /></figure>
<div className="card-body">
    <h2 className="card-title">
        {d.title}
        <div className="badge badge-primary p-5">{d.Name}</div>

    </h2>
    {/* detail */}
    <div className="alert shadow-lg mt-4 ">
        <div>

            <div>
                <div className='flex gap-3'>
                    <h3 className="">Seller Name: </h3>
                    <h3>{d.sellerName}</h3>
                  
                

                    {/* <h3>{d.sellerName}</h3> */}

                </div>
                {/* // */}
                <div className='flex gap-3'>
                    <h3 className="">Location: </h3>
                    <h3>{d.location}</h3>
                </div>
                <button className="btn btn-primary"><Link to={`/area/${d._id}`} >Details</Link></button>
  
                {/* // */}
                <div className='flex gap-3'>
                    <h3 className="">Year of used: </h3>
                    <h3>{d.yearOfUse}</h3>
                </div>
                {/* // */}

                <div className='flex gap-3'>
                    <h3 className="">Orginal price: </h3>
                    <h3>{d.originalPirce}</h3>
                </div>

                {/* // */}

                <div className='flex gap-3'>
                    <h3 className="">Resel price: </h3>
                    <h3>{d.reselPrice}</h3>
                </div>





                <div className='flex gap-3 '>

                    <h3 className="text-xs " >{d.postTime}</h3>
                </div>






            </div>
        </div>
        <div className="flex-none">

        </div>
    </div>
   



    

</div>

  </div>


        </div>
    );
};

export default CardDetail;