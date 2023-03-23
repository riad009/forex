import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { RiH1 } from 'react-icons/ri';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import './Advertisment.css'
const Advertisment = () => {
    const [admin,setAdmin]=useState([])

  const {user,loading}=useContext(AuthContext)

  //user
useEffect(()=>{

  fetch(`https://d-azure.vercel.app/accountType?email=${user?.email}`)
  .then(res=>res.json())
  .then(data=> setAdmin(data))

},[user?.email])
    const detail = useLoaderData()
    // 
    const [city, setCity] = useState();
console.log('city',city)
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
    const [town, settown] = useState();
console.log('city',city)
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
    const filteredDetails = city?.filter(d => d.category === detail.category);  console.log('filteredDetails',filteredDetails) 
   
    const filtertown = town?.filter(d => d.town === detail.city);  console.log('filteredDetails',filteredDetails) 
   console.log('filtertown',filtertown)
    return (
       
     
      
      
        <div className=''>
           
            {
                admin.map(d=><h1>
                 {
                    d.accountType==='admin'?
                    <>
                    <button className='m-3 btn btn-outline'> <Link to={'/giveads'}>Give Ads</Link></button>
                   </>
                    :
                    <></>
                 }
                </h1>)
            }
            <h2 className='text-2xl font-bold'>Advertisements</h2>
          <section className=''>
          <div style={{ height: '30vh', width: '100vw', overflow: 'auto', }} className='m-3 bg-gray-200'>
          <h1>
            
          {
                        filteredDetails?.map(city=><h1>
                            <a href={city.oneimg}>Link</a> <br />
                          <h2>{city.oneads} </h2>
                          
                          {/* two  {city.twoads} 
                          three  {city.threeads}  */}   
                        </h1> )
                    }
                    {/*  */}
                    {
                        filtertown?.map(city=><h1>
                            <a href={city.oneimg}>Link</a> <br />
                          <h2>{city.oneads} </h2>
                          
                          {/* two  {city.twoads} 
                          three  {city.threeads}  */}   
                        </h1> )
                    }
          </h1>
          </div>  
               {/*  */}                  

    <div className='center'>
    {
                        filteredDetails?.map(city=><h1>
                           <div style={{ width: '970px', height: '70px', margin: '0 auto' }} className=" carousel w-96  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={city.twoads} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={city.twoimg} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={city.img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>  
                        </h1> )
                    }
   
    </div>
        
            {/*  */}  
           <div style={{ height: '30vh', width: '100vw', overflow: 'auto', }} className='m-3 bg-gray-200 '>
          <h1>
           
            
          {
                        filteredDetails?.map(city=><h1>
                            <a href={city.threeimg}>Link</a> <br />
                          <h2>{city.threeads} </h2>
                          
                          {/* two  {city.twoads} 
                          three  {city.threeads}  */}   
                        </h1> )
                    }
                    {/*  */}
                    {
                        filtertown?.map(city=><h1>
                            <a href={city.oneimg}>Link</a> <br />
                          <h2>{city.oneads} </h2>
                          
                          {/* two  {city.twoads} 
                          three  {city.threeads}  */}   
                        </h1> )
                    }
          </h1>
          </div> 
          </section>
        </div>
    );
};

export default Advertisment;