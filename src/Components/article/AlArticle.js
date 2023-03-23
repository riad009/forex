import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NewArticleShow from './NewArticleShow';
import { BsNewspaper } from 'react-icons/bs';
import { HiOutlineNewspaper } from 'react-icons/hi';
const AlArticle = () => {
    const [article,setarticle]=useState([]);
 

  useEffect(()=>{
    fetch('https://d-azure.vercel.app/articleall')
    
    .then(res=>res.json())
    .then(data=>setarticle(data))
          
    
        },
        
        [])
         //search article
  
  const [inputValue, setInputValue] = useState(''); //get name from input
  const [schoolname, setTowsalaryRangeSchool] = useState([])
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue)

  // get name from db
  useEffect(() => {

    fetch(`https://d-azure.vercel.app/findarticle/${inputValue}`)
     .then(res => res.json())
    .then(data => {
      setTowsalaryRangeSchool(data)
   
    
    
    })
    
    }, [inputValue])
  //search article
  console.log('towsalaryRangeSchool',schoolname)
    return (
        <div>
         
            <h3 className='text-5xl font-bold m-4 card italic text-left flex'>  <h3>All School Article</h3> <h3><BsNewspaper/></h3>  </h3>
           
           
            <section>
   {/* search */}
   <div className='flex justify-end m-4'>
    <section>
    <input type='text' placeholder='Search Article..' className='input input-info w-full max-w-xs' value={inputValue} onChange={handleInputChange} />
   {/*  */}
   {inputValue.length ?   
    <div  style={{position: 'absolute', top: '5', left: '10',  backgroundColor: 'white'}}
      className="border-1 shadow-xl text-left p-2    text-black text-sm justify-left text-white    m-2"
      
    >
      {
        schoolname.slice(0, 4).map((sc) =>
        
          <h2 className='mt-2 font-bold hover:underline hover:bg-blue-200'>
             
             <a className='flex flex-between ' href={`/recentarticled/${sc.url}`}><HiOutlineNewspaper/> {sc.title}</a>
             
             <hr />
              </h2>
        
           
        )
      }
    </div>
    :
    <></>
  }
    </section>
    </div>
  {/* search end */}

<div className='hand'>
<section className='flex glass'>



</section  >
</div>

{/* <div  className=' gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  
{
  article.map(article=> <ShowArticle
  
    article={article}
  ></ShowArticle> )


}

</div> */}
<div  className='article '>
<div>
  {article.map((article, index) => (
    <div key={index}>
      <NewArticleShow article={article}  />
      {index !== article.length - 1 && <hr className="my-4" />} {/* Add hr tag after every article except the last one */}
    </div>
  ))}
  <hr className="my-4" /> {/* Add hr tag after all articles are rendered */}
</div>



</div>
</section>
        </div>
    );
};

export default AlArticle;