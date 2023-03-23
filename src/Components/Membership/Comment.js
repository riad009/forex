import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthProvider';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineFieldTime } from 'react-icons/ai';
import Fs2howComment from './Fs2Comment';
const Comment = ({d}) => {

     
  const [overallrating, setoverallrating] = useState("5");
  
    const {user,loading}=useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState("5");
 
    //total rating
    const [rating, setRating] = useState("5");

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
    
    const handleRating = (e) => {
      setRating(e.target.value);
    };

    //school fee rating
    const [feerating, setfeerating] = useState("5");
    
    const handleFeeRating = (e) => {
      setfeerating(e.target.value);
      
    };
    console.log('fee rating',feerating)


    //school faculty rating
    const [facultyrating, setfacultyrating] = useState("5");
    
    const handleFacultyRating = (e) => {
      setfacultyrating(e.target.value);
      
    };
    console.log('faculty  rating',facultyrating)
    
  
    //school student lerning rating
    const [studentrating, setstudentrating] = useState("5");
    
    const handleStudentRating = (e) => {
      setstudentrating(e.target.value);
      
    };
    console.log('Student rating',studentrating)
    
  
    //school environemnet rating
    const [environemnetrating, setenvironmentrating] = useState("5");
    
    const handleEnvironmentRating = (e) => {
      setenvironmentrating(e.target.value);
      
    };
    console.log('enviroment rating',environemnetrating)
    


  const betaavgrating = ((parseFloat(studentrating)+ parseFloat(facultyrating)+ parseFloat(feerating)+ parseFloat(environemnetrating))/4)
const   avgrating=parseFloat(betaavgrating).toFixed(1);
  console.log('avgrating',avgrating)

  let string1 = avgrating.toString();

  useEffect(() => {
    setoverallrating(string1); //covert int to string and set data
  }, [string1]);
  //
  
  useEffect(() => {
    setoverallrating(rating); //covert int to string and set data
  }, [rating]);
  //
  

  // overallrating, setoverallrating
  console.log('overallrating',overallrating)
  
   // Fri Jun 17 2022 11:27:28 GMT+0100 (British Summer Time)

   const [showcomment, setshowcomment] = useState([]);
console.log('neeeeeeee',showcomment)

       


    const handleAdd=(event)=>{
       
     

    
      event.preventDefault()


      const date = new Date();

   
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
        
      console.log('dddddddddddd',date)
       

        const comment = event.target.comment.value
      
       
       
      console.log(comment)
    

          const submit={  
         

          //new     
          comment : comment,
          // school: d.school,
           
           
            email:  user?.email || 'parents',
            // datenew: datenew,
            // time: time,
            date:dateString,
            time: timeString,
            selectedOption: selectedOption,
            rating: overallrating,
           
            combine: d.combine
           
          
          
        
            
              
          }
      
          setshowcomment([...showcomment, submit]);
        
        fetch('https://d-azure.vercel.app/givecomment',{
          
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
      
        })
      
        
        // setTimeout(()=>{
        //     window.location.reload(false);   
        //     },1500)


            toast.success(`Comment Added !`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          
          
      //submit
      
            
           
          }


          // new coode 
          useEffect(()=>{
            fetch(`https://d-azure.vercel.app/getcomment?combine=${d?.combine}`)
            
            .then(res=>res.json())
            .then(data=>setshowcomment(data))
          
                  
            
                },
                
                [])
                
      
                const sum = showcomment.map(item => parseFloat(item.rating)).reduce((acc, val) => acc + val, 0);
                const average = sum / showcomment.length;
                console.log('avg',average); 
                console.log('length',showcomment.length); 
                console.log('sum',sum); 
                const reviews =showcomment.length;
                const ratings = Math.round(average);
                console.log('ratings',ratings)
      
               
          //  new coode 

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

// 

const categoryList = d.category
const category = city?.filter(d => categoryList.includes(d.category));
console.log('filteredDetails', category);
// 

const newtown = town?.map(town => town.town);
const matchedTown = town?.filter(item => item.town.toLowerCase() === d.city.toLowerCase());
console.log('matchedValue',matchedTown)
// ads end
    return (
       <section className=' '>
     {/* <h2 className='bg-red-400'>
red
{categoryList2?.map(d=> <h1>
  {d.oneads}
</h1>)

}

     </h2> */}
     {/* {category?.map(d=> <h1>
        <div style={{ width: '60%' }}>
  <h2 className='bg-red-400 text-white  '>
  <div className='my-12'>
   <div className="carousel w-full shadow-xl rounded ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={d.img3} className="w-full" />
    
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={d.twoads} className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={d.twoimg} className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
   </div>

  </h2>
                   </div>
                   
        </h1>)}

     {matchedTown?.map(d=> <h1>
        <div style={{ width: '60%' }}>
  <h2 className='bg-red-400 text-white  '>
  <div className='my-12'>
   <div className="carousel w-full shadow-xl rounded ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={d.img3} className="w-full" />
    
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={d.twoads} className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={d.twoimg} className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
   </div>

  </h2>
                   </div>
                   
        </h1>)} */}

  {category ? (
  // Render the categories slider
  category?.map(d => (
    <h1>
       <div style={{ width: '60%' }}>
  <h2 className='bg-red-400 text-white  '>
  <div className='my-12'>
   <div className="carousel w-full shadow-xl rounded ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={d.img3} className="w-full" />
    
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={d.twoads} className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={d.twoimg} className="w-full" />
    <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
   </div>

  </h2>
                   </div>
    </h1>
  ))
) : (
  // Render the matchedTown slider
 <h2 className='bg-red-400'> 
 </h2>
)}
{
  category?.length >0?
  <></>
  :
  <>
  {
     matchedTown?.map(d => (
      <h1>
         <div style={{ width: '60%' }}>
    <h2 className='bg-red-400 text-white  '>
    <div className='my-12'>
     <div className="carousel w-full shadow-xl rounded ">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={d.img3} className="w-full" />
      
      <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src={d.twoads} className="w-full" />
      <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src={d.twoimg} className="w-full" />
      <div className="absolute flex justify-between transform  left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div> 
   
  </div>
     </div>
  
    </h2>
                     </div>
      </h1>
    ))
  }
  </>
}


{/*  */}
                   
        {/*  */}
         <div className='text-left'>
            <section className='grid lg:grid-cols-3 sm:grid-cols-1'>

<div>

<div className='text-2xl text-white font-bold flex mb-2'>Write a review <span className='mx-2 text-blue-400'>{d.school}</span> 
   
             </div>

             {/*  partial fee rating */}
             <form  className='flex mt-3'>
              <h1 className='badge badge-ghost mr-2'>Fees justification</h1>
            
             <div className="rating  rating-sm">
   <input value="1" onChange={handleFeeRating} type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400" />
   <input value="2" onChange={handleFeeRating} type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400"  />
   <input value="3" onChange={handleFeeRating} type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400" />
   <input value="4" onChange={handleFeeRating} type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400" />
   <input value="5" onChange={handleFeeRating} type="radio" name="rating-2" className="mask mask-star-2 bg-violet-400" />
            </div>
             </form>
             {/*  partial faculty rating */}
             <form   className='flex mt-3 '>
              <h1 className='badge badge-ghost mr-2'>Faculty rating</h1>
             <div className="rating  rating-sm">
   <input value="1" onChange={handleFacultyRating} type="radio" name="rating-2" className="mask mask-star-2 bg-blue-400" />
   <input value="2" onChange={handleFacultyRating} type="radio" name="rating-2" className="mask mask-star-2 bg-blue-400"  />
   <input value="3" onChange={handleFacultyRating} type="radio" name="rating-2" className="mask mask-star-2 bg-blue-400" />
   <input value="4" onChange={handleFacultyRating} type="radio" name="rating-2" className="mask mask-star-2 bg-blue-400" />
   <input value="5" onChange={handleFacultyRating} type="radio" name="rating-2" className="mask mask-star-2 bg-blue-400" />
</div>
             </form>

             {/*  partial student rating */}
             <form  className='flex mt-3 mb-3 '>
              <h1 className='badge badge-ghost  mr-2' check>My child has learned</h1>
             <div className="rating  rating-sm">
   <input value="1" onChange={handleStudentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
   <input value="2" onChange={handleStudentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400"  />
   <input value="3" onChange={handleStudentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
   <input value="4" onChange={handleStudentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
   <input value="5" onChange={handleStudentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
</div>
             </form>
             {/*  partial School environment rating */}
             <form className='flex mt-3 mb-3 '>
              <h1 className='badge badge-ghost  mr-2' check>School environment</h1>
             <div className="rating  rating-sm">
   <input value="1" onChange={handleEnvironmentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-green-400" />
   <input value="2" onChange={handleEnvironmentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-green-400"  />
   <input value="3" onChange={handleEnvironmentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-green-400" />
   <input value="4" onChange={handleEnvironmentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-green-400" />
   <input value="5" onChange={handleEnvironmentRating} type="radio" name="rating-2" className="mask mask-star-2 bg-green-400" />
</div>
             </form>
             

            
            
 {/* total */}
 <div  className='text-white'>
 Overall experience ({overallrating})
 </div>
            
</div>

<div>

{/* yes no */}
<section className='text-white'>
<p>Would you recommend this school?</p>
<form>
  <label>
    <input
      type="radio"
      value="yes"
      checked={selectedOption === "yes"}
      onChange={handleOptionChange}
    />
    Yes
  </label>
  <br />
  <label>
    <input
      type="radio"
      value="no"
      checked={selectedOption === "no"}
      onChange={handleOptionChange}
    />
    No
  </label>
</form>
<br />

</section>

{/* // angry and happy  */}
<section>
{
selectedOption === 'no' ?

<>
 😈
</>

:

<> 😇 </>

}
</section>

</div>

            </section>
            
            <form onSubmit={handleAdd}>
             <h1 className='text-white text-sm'>Review</h1>
             
             <textarea className=" w-52 h-32  lg:p-4 textarea textarea-info mt-2 lg:w-96 lg:h-48 bg-ghost" placeholder="Write a comment" name='comment'></textarea>
                <h1>..</h1>
           
           <button  className='btn  btn-info lg:btn-wide glass text-white mb-3'> Submit</button>
               
               
               </form>
{/* show comment  */}
{


    
  showcomment.map(numbers=> <h1>
    
    <Fs2howComment  numbers={numbers}>  </Fs2howComment>

 

  </h1>)
}

                   </div>

                   
       </section>
    );
};

export default Comment;