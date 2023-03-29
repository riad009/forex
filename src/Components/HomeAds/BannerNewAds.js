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
      {ads.map(d => (
        <h1>
          <div className="carousel-container w-full md:w-970px">
            <div className="carousel w-full md:h-90 shadow-xl rounded">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={d.slider1} className="w-full h-20 md:h-90 object-cover" />
                <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
                <img src={d.slider2} className="w-full h-20 md:h-90 object-cover" />
                <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
                <img src={d.slider3} className="w-full h-20 md:h-90 object-cover" />
                <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide4" className="carousel-item relative w-full">
                <img src={d.slider1} className="w-full object-cover" />
                <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div>
        </h1>
      ))}
    </div>
    
    );
};

export default BannerNewAds;