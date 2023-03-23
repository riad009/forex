import React, { useContext, useEffect, useState } from 'react';
import { RiH1 } from 'react-icons/ri';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Article from '../article/Article';
import { AuthContext } from '../Auth/AuthProvider';
import Silver from '../Membership/Silver';
import Show from './Show';

const SchoolPage = (props) => {
   
 
    const [cart,setCart]=useState([])

    const navigate=useNavigate()
     
   
    const detail = useLoaderData()
    const un= "school"
    const uniq= [...new Map(detail.map(cat=> [cat[un],cat]  )).values()]
// ads 3/10/2023
//city ads
const [city, setCity] = useState();


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

const categoryList = uniq.map(item => item.category);

 //
const citylist = uniq.map(item => item.city);
console.log('citylist',citylist)
 //
 
 const townlist = town?.filter(d => citylist.includes(d.town));
 console.log('townlist', townlist);
   
    // 
 
    
    const category = city?.filter(d => categoryList.includes(d.category));
    console.log('filteredDetails', category);
    
//city ads
// ads end
    
    return (
        <div className='mb-12 '>
            
   {/* top banner */}
            <div>
             <p style={{ height: '5vh', width: '100%', overflow: 'auto', }}   className='text-justify hover:underline  p-1  bg-[#4FD1C5] text-white'>
       
             {
                category?.map(d=><h1>
                    <a href={d.oneimg}>{d.oneimg}</a>
                </h1> )
             }
             {/*  */}
             {
                townlist?.map(d=><h1>
                    <a href={d.oneimg}>{d.oneimg}</a>
                </h1> )
             }
             </p>
             {/* <p className='colorBlue mb-1'><hr /></p> */}
            {/* // */}
             {/* <p style={{ height: '25vh', width: '100%', overflow: 'auto', }}  className='text-justify p-2 border  bg-[#265479] text-white '>
             {
                category?.map(d=><h1>
                    {d.oneads}
                </h1> )
             }
             {
                townlist?.map(d=><h1>
                    {d.oneads}
                </h1> )
             }

             </p> */}
            </div>

           <div className='pt-12 colorBlue '>
  
           </div>

            {

uniq.map(d=>   <Show  d={d}  ></Show> )
            }

          {/* {

            cart.map(c=> <h1>{c.students} {c.school}</h1>)
          } */}
       {/* bottom banner */}
       <div className='text-justify'>
             <p style={{ height: '5vh', width: '100%', overflow: 'auto', }} className='p-1  bg-[#4FD1C5] text-white'>
             {
                category?.map(d=><h1>
                    <a href={d.threeimg}>{d.threeimg}</a>
                </h1> )
             }
             {/*  */}
             {
                townlist?.map(d=><h1>
                    <a href={d.threeimg}>{d.threeimg}</a>
                </h1> )
             }

             </p>
             {/* <p className='colorBlue mb-1'><hr /></p> */}
             <p style={{ height: '25vh', width: '100%', overflow: 'auto', }}  className='p-2 border  bg-[#265479] text-white '>

             {
                category?.map(d=><h1>
                    {d.threeads}
                </h1> )
             }
             {/*  */}
             {
                townlist?.map(d=><h1>
                    {d.threeads}
                </h1> )
             }
             </p>
            </div>

            <Article></Article>
        </div>
    );
};

export default SchoolPage;