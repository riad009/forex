import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const TownAds = () => {
    const city = useLoaderData()
    const handle1stads = (event) => {
        event.preventDefault();
        const adsdetail = event.target.adsdetail.value;
        const img = event.target.img.value;
        const submit = {  
            oneads: adsdetail,
            oneimg: img
        };
        
        fetch(`https://d-azure.vercel.app/towngiveadscategory/${city._id}`, {
          method: 'PUT',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(submit)
        })
        .then(res => res.json())
        .then(data => {
          toast.success('given 1st ads ');
          console.log(data);
        });
        
        console.log(submit);
      };
      //
    const handle2ndtads = (event) => {
        event.preventDefault();
        const adsdetail = event.target.adsdetail.value;
        const img = event.target.img.value;
        const img3 = event.target.img3.value;
        const submit = {  
            twoads: adsdetail,
            twoimg: img,
            img3:img3,
        };
        
        fetch(`https://d-azure.vercel.app/towngivesecondadscategory/${city._id}`, {
          method: 'PUT',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(submit)
        })
        .then(res => res.json())
        .then(data => {
          toast.success('given 2nd ads');
          console.log(data);
        });
        
        console.log(submit);
      };
    // 
    const handle3rdtads = (event) => {
        event.preventDefault();
        const adsdetail = event.target.threeadsdetail.value;
        const img = event.target.threeimg.value;
        const submit = {  
            threeads: adsdetail,
            threeimg: img
        };
        
        fetch(`https://d-azure.vercel.app/towngivethreeadscategory/${city._id}`, {
          method: 'PUT',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(submit)
        })
        .then(res => res.json())
        .then(data => {
          toast.success('given 3rd ads');
          console.log(data);
        });
        
        console.log(submit);
      };  
      
    
    return (
        <div>
        <h2 className='font-bold text-2xl mb-3 mt-1'>Give ads to <br />{city.category} <hr /> </h2>
      <section className='grid lg:grid-cols-3 sm:grid-cols-1'>
      <div >
      <form  onSubmit={handle1stads}>
       
       <table className='m-4 border-2 '>
        <tr>
        <h2 className='font-bold bg-gray-200 text-xl'>top banner position </h2>
        </tr>
           <tr>      
             <td> <textarea className="textarea textarea-bordered" name='adsdetail' placeholder="details ads"></textarea>
             </td>
           </tr>
         <tr>
           <td>
           <input  type="text" placeholder="top banner link" name='img' className="mt-2 input input-bordered input-success w-full max-w-xs" />
           </td>
         </tr>
        <tr>
        <button className='mt-3 btn btn-info'>submit</button>
        </tr>
       </table>
      
      </form>
      </div>
     
      {/*  */}
      <div >
      <form  onSubmit={handle2ndtads}>
       
       <table className='m-4 border-2 '>
        <tr>
        <h2 className='font-bold bg-gray-200 text-xl'>Ads for banner </h2>
        </tr>
           <tr>      
             <td> <input className="textarea textarea-bordered" name='adsdetail' placeholder="1st banner"></input>
             </td>
           </tr>
         <tr>
           <td>
           <input  type="text" placeholder="seconnd sliding banner position" name='img' className="mt-2 input input-bordered input-success w-full max-w-xs" />
           </td>
         </tr>
         <tr>
           <td>
           <input  type="text" placeholder="third sliding banner position" name='img3' className="mt-2 input input-bordered input-success w-full max-w-xs" />
           </td>
         </tr>
        <tr>
        <button className='mt-3 btn btn-info'>submit</button>
        </tr>
       </table>
      
      </form>
      </div>
{/*  */}
      <div >
      <form  onSubmit={handle3rdtads}>
       
       <table className='m-4 border-2 '>
        <tr>
        <h2 className='font-bold bg-gray-200 text-xl'>Bottom banner position </h2>
        </tr>
           <tr>      
             <td> <textarea className="textarea textarea-bordered" name='threeadsdetail' placeholder="details ads"></textarea>
             </td>
           </tr>
         <tr>
           <td>
           <input  type="text" placeholder="Bottom text link" name='threeimg' className="mt-2 input input-bordered input-success w-full max-w-xs" />
           </td>
         </tr>
        <tr>
        <button className='mt-3 btn btn-info'>submit</button>
        </tr>
       </table>
      
      </form>
      </div>
{/*  */}
      </section>
       
       
    </div>
    );
};

export default TownAds;