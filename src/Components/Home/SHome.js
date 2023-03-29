import React from 'react';
import './SHome.css'
import logo from '../../assets/img/logo.png'
import backarrow from '../../assets/img/back-arrow.png'
import nextarrow from '../../assets/img/next-arrow.png'
import banner from '../../assets/banner-11.json'
import line from '../../assets/line.json'
import wave from '../../assets/banner-12.json'
import Lottie from "lottie-react"
import { useEffect } from 'react';
import { useState } from 'react';
import { RiH1 } from 'react-icons/ri';

const SHome = () => {
  const [ads,setads]=useState([]);
 

  useEffect(()=>{
    fetch('https://d-azure.vercel.app/gethomeads')
    
    .then(res=>res.json())
    .then(data=>setads(data))
          
    
        },
        
        [])
    return (
        <div className='hand  grid divide grid-cols-1 '>


  <div className='' >
     {/* <button className='btn btnColor'>1000 + school </button>            */}
       {/* <h1  className='text-justify mx-8'>Find the best school for your child and interact with school social media. bsk is the best website in Pakistan to know where the school is.
   <span className='color-[#6a7199] text-xs'> <br /> Your child will learn effectively on the right platform where our moderators will target their curriculum staff across the online platform</span> </h1>
   */}
   <div className='justify-self-center mt-4 '><Lottie animationData={line} /></div>
 
  <div className='flex'>
  <div className='justify-self-center '><Lottie animationData={banner} /></div>
 
  <div className='justify-self-center '><Lottie animationData={wave} /></div>
 
  </div>
  
   </div>
  {/*  */}
  <div style={{opacity: "0.8"}} class=" bg-white  rounded-lg overflow-hidden max-w-4xl mx-auto">
  <div class="px-6 py-8">
    <h1 class="text-4xl font-bold mb-4 text-gray-800">
      Find the Best Schools in Pakistan:
      Your Guide to Quality Education
    </h1>
    <p class="text-gray-700 text-lg mb-8 text-justify italic">
      Are you looking for the best schools in Pakistan to give your child the education they deserve? Look no further than our comprehensive guide to quality education. We've done the research for you and compiled a list of top-rated schools across the country, complete with information on their academic programs, extracurricular activities, and more. Whether you're in Islamabad, Lahore, Karachi, or beyond, we can help you find the perfect school for your child's needs.
    </p>
    

    
  </div>
</div>


   
        </div>
    );
};

export default SHome;