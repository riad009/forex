import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UserShow = ({d,i}) => {



    const handleMakeAdmin=(event)=>{
        event.preventDefault()
   

        
        // const task =event.target.task.value
      
       

          const submit={  
         

          //new     
         
         
          accountType: "admin"
        
            
              
          }
      
        
        fetch(`https://d-azure.vercel.app/updateUser/${d._id}`,{
          
          method: 'PUT',
          
          headers:{
           "content-type" : "application/json"
          },
          
          
          body: JSON.stringify(submit)
       
           })
           .then(res=>res.json())
        .then(data=>{
              toast.success(`${d.name} permission has been updated`)
    
      

        // setTimeout(()=>{
        //     window.location.reload(false);   
        //     },1500)
           
      
        })
       
        
          
      //submit
      
          
           
          }

        //    moderator  
    const handleMakeModerator=(event)=>{
        event.preventDefault()
   

        
        // const task =event.target.task.value
      
       

          const submit={  
         

          //new     
         
         
          accountType: "moderator"
        
            
              
          }
      
        
        fetch(`https://d-azure.vercel.app/updateUser/${d._id}`,{
          
          method: 'PUT',
          
          headers:{
           "content-type" : "application/json"
          },
          
          
          body: JSON.stringify(submit)
       
           })
           .then(res=>res.json())
        .then(data=>{
              toast.success(`${d.name} permission has been updated`)
       
      

        // setTimeout(()=>{
        //     window.location.reload(false);   
        //     },1500)
           
      
        })
         
        
          
      //submit
      
          
           
          }

          //    user



          
          const handleMakeUser=(event)=>{
            event.preventDefault()
      
    
            
            // const task =event.target.task.value
          
           
    
              const submit={  
             
    
              //new     
             
             
              accountType: "user"
            
                
                  
              }
          
            
            fetch(`https://d-azure.vercel.app/updateUser/${d._id}`,{
              
              method: 'PUT',
              
              headers:{
               "content-type" : "application/json"
              },
              
              
              body: JSON.stringify(submit)
           
               })
               .then(res=>res.json())
            .then(data=>{
                  toast.success(`${d.name} permission has been updated`)
           
          
    
            // setTimeout(()=>{
            //     window.location.reload(false);   
            //     },1500)
               
          
            })
            
            
              
          //submit
          
              
               
              }


              //principle
              const handleMakePrinciple=(event)=>{
                event.preventDefault()
           
        
                
                // const task =event.target.task.value
              
               
        
                  const submit={  
                 
        
                  //new     
                 
                 
                  accountType: "principle"
                
                    
                      
                  }
              
                
                fetch(`https://d-azure.vercel.app/updateUser/${d._id}`,{
                  
                  method: 'PUT',
                  
                  headers:{
                   "content-type" : "application/json"
                  },
                  
                  
                  body: JSON.stringify(submit)
               
                   })
                   .then(res=>res.json())
                .then(data=>{
                      toast.success(`${d.name} permission has been updated`)
               
              
        
                // setTimeout(()=>{
                //     window.location.reload(false);   
                //     },1500)
                   
              
                })
                 
                
                  
              //submit
              
                  
                   
                  }
              //silver
              const handleMakeSilver=(event)=>{
                event.preventDefault()
            
        
                
                // const task =event.target.task.value
              
               
        
                  const submit={  
                 
        
                  //new     
                 
                 
                  accountType: "silver"
                
                    
                      
                  }
              
                
                fetch(`https://d-azure.vercel.app/updateUser/${d._id}`,{
                  
                  method: 'PUT',
                  
                  headers:{
                   "content-type" : "application/json"
                  },
                  
                  
                  body: JSON.stringify(submit)
               
                   })
                   .then(res=>res.json())
                .then(data=>{
                      toast.success(`${d.name} permission has been updated`)
              
              
        
                // setTimeout(()=>{
                //     window.location.reload(false);   
                //     },1500)
                   
              
                })
                
                
                  
              //submit
              
                  
                   
                  }
              //golden
              const handleMakeGolden=(event)=>{
                event.preventDefault()
          
        
                
                // const task =event.target.task.value
              
               
        
                  const submit={  
                 
        
                  //new     
                 
                 
                  accountType: "golden"
                
                    
                      
                  }
              
                
                fetch(`https://d-azure.vercel.app/updateUser/${d._id}`,{
                  
                  method: 'PUT',
                  
                  headers:{
                   "content-type" : "application/json"
                  },
                  
                  
                  body: JSON.stringify(submit)
               
                   })
                   .then(res=>res.json())
                .then(data=>{
                      toast.success(`${d.name} permission has been updated`)
           
              
        
                // setTimeout(()=>{
                //     window.location.reload(false);   
                //     },1500)
                   
              
                })
           
                
                  
              //submit
              
                  
                   
                  }
    
    return (
        <div>
            
         
            <div className="overflow-x-auto mt-12  m-2 ">
  <table className="table w-full">
   
    <thead>
      <tr>
        
        <th></th>
       
        <th>Name</th>
        <th>email</th>
        <th>Role</th>
        
        <th className='text-center'>Give membership</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
         <th className='m2'> {i}</th>
        <td><button className=" "><Link to={`/school/${d._id}`} >{d.name}</Link></button>
   </td>
        <td>{d.email}</td>
        {

d?.accountType=='admin'? 
<> 
<td className='text-green-400'>{d.accountType}</td>

</>
:
<>

</>
    }

    {/* role */}
        {

d?.accountType=='moderator'? 
<> 
<td className='text-sky-400'>{d.accountType}</td>

</>
:
<>

</>
    }

    {/* role */}
        {

d?.accountType=='user'? 
<> 
<td className='text-gray-400'>{d.accountType}</td>

</>
:
<>

</>
    }

    {/* role */}
        {

d?.accountType=='golden'? 
<> 
<td className='text-yellow-400'>{d.accountType}</td>

</>
:
<>

</>
    }

    {/* role */}
    {/* role */}
        {

d?.accountType=='silver'? 
<> 
<td className='text-teal-400 '>{d.accountType}</td>

</>
:
<>

</>
    }

    {/* role */}
        {

d?.accountType=='principle'? 
<> 
<td className='text-violet-400'>{d.accountType}</td>

</>
:
<>

</>
    }

    {/* role */}

        
      
        <td > 
      <div className='grid lg:grid-cols-3  '>
      <button onClick={handleMakeUser} className="mr-2 mb-2 btn-sm   btn btn-outline btn-gray">Normal user</button>
       
       <button onClick={handleMakeModerator} className="mr-2 mb-2 btn-sm btn btn-outline btn-info">Moderator</button>
          
 <button onClick={handleMakeAdmin} className="mr-2 mb-2 btn-sm btn btn-outline btn-success">Admin</button>
   
  
   <button onClick={handleMakePrinciple} className="mr-2  mb-2  btn-sm  btn btn-outline btn-primary"> Principle</button>
 
   <button onClick={handleMakeSilver} className="mr-2  mb-2 btn-sm  btn btn-outline btn-accent">Silver</button>
   
   <button onClick={handleMakeGolden} className="mr-2   mb-2 btn-sm  btn btn-outline btn-warning">Golden</button>
 
        </div>   
             
                  </td>
      
        
      </tr>
      
      
      
    </tbody>
  </table>
</div>
<ToastContainer/>
        </div>
    );
};

export default UserShow;