import React from 'react';
import './SHome.css'
import logo from '../../assets/img/logo.png'
import backarrow from '../../assets/img/back-arrow.png'
import nextarrow from '../../assets/img/next-arrow.png'
import banner from '../../assets/banner-11.json'
import line from '../../assets/line.json'
import wave from '../../assets/banner-12.json'
import Lottie from "lottie-react"

const SHome = () => {
    return (
        <div className='hand  container grid lg:grid-cols-2 grid-cols-1 '>


  <div className=' ' >
     {/* <button className='btn btnColor'>1000 + school </button>            */}
       <h1  className='text-justify mx-8'>Find the best school for your child and interact with school social media. bsk is the best website in Pakistan to know where the school is.
   <span className='color-[#6a7199] text-xs'> <br /> Your child will learn effectively on the right platform where our moderators will target their curriculum staff across the online platform</span> </h1>
   <div className='justify-self-center mt-4 w-96'><Lottie animationData={line} /></div>
 
  <div className='flex'>
  <div className='justify-self-center w-96'><Lottie animationData={banner} /></div>
 
  <div className='justify-self-center w-48'><Lottie animationData={wave} /></div>
 
  </div>
  
   
   </div>
  {/*  */}
   <div className='my-12'>
   <div className="carousel w-full shadow-xl rounded ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://media.freewebstock.com/school-admission-banner-template.jpeg" className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/09/Educational-School-Admission-Banner-Template.jpg" className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.freewebstock.com/school-admission-banner-template.jpeg" className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/realistic-back-school-background_52683-87650.jpg?w=2000" className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
   </div>
   
        </div>
    );
};

export default SHome;