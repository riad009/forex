import React from 'react';
import hand from '../../assets/banner-5.json'
import wave from '../../assets/banner-10.json'
import Lottie from "lottie-react"
import './HandDesign.css'
const HandDesign = () => {
    return (
        <div className='hand'>
            <h2 className="text-3xl font-bold  py-1 ">Find School By Town</h2>
           
           <section className='mt-4 grid lg:grid-cols-2 sm:grid-cols-1'>
              <div> <h3 className='italic'>Our AI system will help you find the best schools in your area.  Each of our systems is updated by parent feedback and our AI will create the best schools near your location based on your feedback.</h3> <section className="flex"><div className='justify-self-center w-48'><Lottie animationData={wave} /> </div>  <h3 className="mt-6 text-2xl font bold non-italic">Greeting service is our first priority</h3></section>
            </div>
           
            
           </section>
           
            </div>
    );
};

export default HandDesign;