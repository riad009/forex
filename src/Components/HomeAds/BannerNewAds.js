import React, { useEffect, useState } from 'react';

const BannerNewAds = () => {
    const [ads,setads]=useState([]);
 

    useEffect(()=>{
      fetch('https://d-azure.vercel.app/gethomeads')
      
      .then(res=>res.json())
      .then(data=>setads(data))
            
      
          },
          
          [])
    return (
        <div className='my-8'>
            {
    ads.map(d=><h1>
      <div style={{ width: '970px', height: '70px', margin: '0 auto' }} >
   <div className="carousel w-full shadow-xl rounded ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={d.slider1} className="w-full h-20 md:h-90" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={d.slider2} className="w-full h-20 md:h-90" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={d.slider3} className="w-full h-20 md:h-90" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={d.slider1} className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
   </div>
    </h1> )
   }
        </div>
    );
};

export default BannerNewAds;