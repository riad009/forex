import React, { useEffect, useState } from 'react';
import './Home.css'
import school from '../assets/school.json'
import sc from '../assets/sc.json'
import world from '../assets/world.json'
import city from '../assets/city.json'
import find from '../assets/find-water.json'
import Lottie from "lottie-react"
import Article from './article/Article';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {

  const [searchSchool,setSearchSchool]=useState([]);




  const [schoolname, setSchoolName] = useState("")

  const handleFindSchool = () => {

    if (schoolname.length === 0) {


      toast('enter value')
      return

    }

fetch(`http://localhost:5000/serachSchool/${schoolname}`)
         .then(res => res.json())
      .then(data => {
        setSearchSchool(data)
        // console.log('tow', data)


      })

  }

  useEffect(()=>{
    
    fetch(`http://localhost:5000/serachSchool/${schoolname}`)
    //  fetch(`http://localhost:5000/searchSChool?searchWord=${schoolname}`)
    .then(res => res.json())
    .then(data => {
      setSearchSchool(data)
      // console.log('tow', data)


    })

  },[schoolname])
  console.log(schoolname)

  return (
    <div className='okk' >




      <div className='banner' >

        <div className='divide flex '>
          <div className='left'>

            <div className='justify-self-center w-96'><Lottie animationData={city} /></div>
          </div>

          <div className='mobile  right  text-xl '>
            <h1 className='pc mt-4 text-2xl font-mono  font-bold '>locate the school</h1>
            <h1 className='pc mt-3 font-bold text-3xl '>THAT IS MOST SUITABLE FOR YOU</h1>
            <h1 className=' mt-2 text-2xl'>Finding the right school shouldn’t be hard. From play group to high school. <br /> We make it simple to find and connect with the finest ones for you.</h1>
            <div className='justify-center '>

              {/* search */}

              <section className='flex mt-8 grid sm:grid-cols-4 md:grid-cols-4 gap-2 '>
                {/*  */}
                <div>


                  <input onChange={(event) => setSchoolName(event.target.value)} type="text" placeholder="school name " className="input input-bordered w-full max-w-xs" />

                </div>


{/* map */}
<select className="select select-secondary w-full max-w-xs">
{

searchSchool.map(sc=>

  //
  // 

 <option><Link to={`/school/${sc._id}`}  > {sc.school} </Link> </option>

   )
}
</select>



                {/*  */}

                

                {/*  */}
                <div>
                  <select className="select select-success  w-40   ">

                    <option disabled selected>Town name</option>
                    <option>One Piece</option>
                    <option>Naruto</option>
                    <option>Death Note</option>
                    <option>Attack on Titan</option>
                    <option>Bleach</option>
                    <option>Fullmetal Alchemist</option>
                    <option>Jojo's Bizarre Adventure</option>
                  </select>

                </div>

                {/*  */}
                <div>
                  <select className="select select-success  w-40 ">

                    <option disabled selected>Salary Range</option>

                    <option>0 to 1001 </option>
                    <option>1001 to 2500 </option>
                    <option>2501 to 5000 </option>
                    <option>5001 to 10000</option>
                    <option>10000 to 30,000 </option>

                  </select>

                </div>

                {/*  */}
                <div>
                  <select className="select select-success  w-40 ">

                    <option disabled selected>School Features</option>
                    <option>One Piece</option>
                    <option>Naruto</option>
                    <option>Death Note</option>
                    <option>Attack on Titan</option>
                    <option>Bleach</option>
                    <option>Fullmetal Alchemist</option>
                    <option>Jojo's Bizarre Adventure</option>
                  </select>

                </div>
                {/*  */}


              </section>

              {/* search */}

              <div className='flex justify-center'>
                {/* <Link ><button onClick={handleFindSchool} className="pc mt-5 btn btn-active bg-green-600 mt-12 ">Find school</button></Link> */}

                <Link to='school'><button onClick={handleFindSchool} className="pc mt-5 btn btn-active bg-blue-600 mt-12 "> New Find school</button></Link>


                <div className='justify-self-center w-40'><Lottie animationData={find} /></div>
              </div>

            </div>

          </div>


        </div>

        <svg className='svg block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45"><path fill="#FFFFFF" fill-opacity="1" d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path></svg>

      </div>
      <Article></Article>

    </div>
  );
};

export default Home;

