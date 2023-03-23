import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminGiveAds = () => {
 
    const [city, setCity] = useState();
    const [town, settown] = useState();

    useEffect(() => {
      fetch('https://d-azure.vercel.app/townschool')
        .then(response => response.json())
        .then(data => {
          setCity(data); // Update the cit state with the received data
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    // 
    useEffect(() => {
      fetch('https://d-azure.vercel.app/gettown')
        .then(response => response.json())
        .then(data => {
            settown(data); // Update the cit state with the received data
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    // 
    
    console.log('settown',settown); // This will log undefined, since the response hasn't been received yet
    
    const handlecreatetown=(event)=>{
        event.preventDefault()
    

        const town = event.target.town.value

       
      
    

          const submit={  
         

          //new     
          town: town ,

          
        
            
              
          }
      
        
        fetch('https://d-azure.vercel.app/addadstown',{
          
          method: "POST",
          headers:{
           "content-type" : "application/json"
          },
          
          body: JSON.stringify(submit)
       
           })
           .then(res=>res.json())
        .then(data=>{
       
        if(data.acknowledged){
            
        event.target.reset()
       
         }
         toast.success(`New  ${town} Town Added !`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(()=>{
                window.location.reload(false);   
                },3000)
      
        })
      
        
          
      //submit
      
          
           
          }
          //
          const handle2ndtads = (event) => {
            event.preventDefault();
            const slider1 = event.target.slider1.value;
            const slider2 = event.target.slider2.value;
            const slider3 = event.target.slider3.value;
            const toplink = event.target.toplink.value;
            const toptext = event.target.toptext.value;
            const bottomlink = event.target.bottomlink.value;
            const bottomtext = event.target.bottomtext.value;
            
            const submit = {  
              slider1: slider1,
              slider2: slider2,
              slider3: slider3,
              toplink: toplink,
              toptext: toptext,
              bottomlink: bottomlink,
              bottomtext: bottomtext,
                
            };
            console.log(submit)
            const itemId = "640b524b6f34642b116d3992";
            fetch(`https://d-azure.vercel.app/homeads/${itemId}`, {
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
    return (
<section className=' grid lg:grid-cols-3 sm:grid-cols-1'>
       <div className='m-3 border-2 bg-pink-200 text-2xl'  >
       <h2 className='font-bold bg-blue-400'>Home Ads</h2>
  <hr />
  <div >
          <form  onSubmit={handle2ndtads}>
           
           <table className='m-2 w-full '>
           <p className=''> <hr />----Middle banner slider-----</p>
            <tr>
               <td>
               <input  type="text" placeholder="1st sliding banner position" name='slider1' className="mt-2 input input-bordered input-success w-full max-w-xs" />
               </td>
             </tr>
            <tr>
               <td>
               <input  type="text" placeholder="2nd sliding banner position" name='slider2' className="mt-2 input input-bordered input-success w-full max-w-xs" />
               </td>
             </tr>
             
             <tr>
               <td>
               <input  type="text" placeholder="third sliding banner position" name='slider3' className="mt-2 input input-bordered input-success w-full max-w-xs" />
               </td>
             </tr>
             <p className=''> <hr />----Top banner-----</p>
             {/*  */}
             <tr>
               <td>
               <input  type="text" placeholder="top banner link" name='toplink' className="mt-2 input input-bordered input-success w-full max-w-xs" />
               </td>
             </tr>
             {/*  */}
             <tr>
               <td>
               <input  type="text" placeholder="top banner text details" name='toptext' className="mt-2 input input-bordered input-success w-full max-w-xs" />
               </td>
             </tr>
             <p className=''> <hr />----bottom banner-----</p>
             {/*  */}
             <tr>
               <td>
               <input  type="text" placeholder="bottom banner link" name='bottomlink' className="mt-2 input input-bordered input-success w-full max-w-xs" />
               </td>
             </tr>
             {/*  */}
             <tr>
               <td>
               <input  type="text" placeholder="bottom banner text details" name='bottomtext' className="mt-2 input input-bordered input-success w-full max-w-xs" />
               </td>
             </tr>
            <tr>
            <button className='mt-3 btn btn-info'>submit</button>
            </tr>
           </table>
          
          </form>
          </div>
        </div>   





<div className='m-3 border-2 bg-blue-200 text-2xl  '>
  <h2 className='font-bold bg-blue-400'>City Ads</h2>
  <hr />
  {
    city?.map(city => ( <h1>
       
         <Link to={`/cityid/${city._id}`} >
        <h1 className='hover:underline  '>{city?.category}</h1>
      </Link>
    </h1>
      
    ))
  }
  
</div>
    {/*  */}
    <div className='m-3   border-2 bg-green-200 '>

   <h2 className='font-bold bg-green-400 text-2xl '>Town ads</h2>
   {/* <Link to={'/townads'} >town ads</Link> */}
  <form onSubmit={handlecreatetown} className='mt-2' >
  <input type="text" placeholder="town name (same name)" name='town' className="input input-bordered input-primary w-full max-w-xs" />
  <button className='btn btn-outline btn-info m-2'>Creat new town</button>
    </form>         
  
  <h3>
  Please note: First time you need to create town name, where you want to show ads for all school existing on that town.  Remember to name the town where it already exists and created from admin pnael 'add school'.  You need to define the city name here
    </h3>  {
            town?.map(town=> <h1 className='text-2xl hover:underline'>
                <Link to={`/townid/${town._id}`} >
        <h1 className='hover:underline  '>{town?.town}</h1>
      </Link>
                   
                
            </h1>)
        }
    </div>
    
</section>
    );
};

export default AdminGiveAds;