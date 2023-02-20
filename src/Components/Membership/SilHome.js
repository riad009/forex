import React, { useState } from 'react';
import './Membership.css'
import kids from '../../assets/kids-4.json'
import kids2 from '../../assets/kids.json'
import Lottie from "lottie-react"

const SilHome = ({d}) => {

    const slicedText = d?.youtube?.slice(17);
    
    const [videoLink, setVideoLink] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ');


    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <section className=''>
          <label className="swap swap-flip text-9xl">
  
 
  <input type="checkbox" />

  <div className="swap-on "><figure> <h1 className=' text-sm mt-4  text-white text-left '>A Degree from this Institution is a Ticket to Career Success   </h1>  <div className='justify-self-center lg:w-96 w-48'><Lottie animationData={kids} /></div>
     </figure></div>
  <div className="swap-off "><figure><h1 className=' text-sm mt-4 text-white text-left '>Students Get Hands-on Learning Experiences and Graduate with Confidence 
  <p>
      {d.checkedOptions?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </p>
  </h1> <div className='justify-self-center lg:w-96 w-48'><Lottie animationData={kids2} /></div>
  </figure>
 </div>
</label>
          
                 
           </section>
           
           {/* youtube */}
           <section className='text-left  text-white'>
            {

              slicedText ?

              <>
              <h1 lassName='mb-1'>Recent Youtube video</h1>
               <iframe className='h-48  w-48 mt-1  lg:w-96 lg:h-80 rounded '  src={`https://www.youtube.com/embed/${slicedText}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe> 
              </>
              :
              <>
              <h1 className='mb-1'>Recent Youtube video</h1>
              <div className=''>
            <iframe className=' h-48  w-48 mt-1  lg:w-96 lg:h-80 rounded  ' src="https://www.youtube.com/embed/GchuXH5KUeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div></>

            }
          


             
             </section>
        </div>
    );
};

export default SilHome;