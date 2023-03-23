import React from 'react';
import hand from '../../assets/banner-5.json'
import wave from '../../assets/banner-10.json'
import Lottie from "lottie-react"
import './HandDesign.css'
const HandDesign = () => {
    return (
        <div className='hand'>
           
           <section style={{opacity: "0.8"}} className='glass  divide sm:grid-cols-1'>
              
              
              <section className="flex"><div className='justify-self-center w-48'><Lottie animationData={wave} /> </div>  </section>
              
              <h3 className="mt-6 text-xl font bold non-italic">

              Find the best schools in Pakistan with our comprehensive database. Discover top private and public schools across the country. Choose the perfect academic program or extracurricular activity for your child. Start exploring now!
              </h3>
           {/* Our AI system will help you find the best schools in your area.  Each of our systems is updated by parent feedback and our AI will create the best schools near your location based on your feedback. */}
            
           </section>
           
            </div>
    );
};

export default HandDesign;