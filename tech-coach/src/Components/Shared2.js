import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const Shared2 = () => {

    const navigate=useNavigate();
    const goback=()=>{
        navigate ("/Totaldecision")
    }
  return (
    <>
    <Navbar/>

<div className='hot'> 
    <br></br>

<div className='you'> 
<div className='usee'> 
        <div> Decision Name: kkk</div>
        <div> Decision Details: joo</div>
        <div> Decision Reasons:  jjjjjjjjjjjj </div>
        <div> Decision Due Date:  2024-08-01</div>
        <div> Decision Taken Date: 2024-07-16 </div>
        <div> Selected Tags: Personal</div>
    <button className='uplift' onClick={goback}> GO BACK </button>   
    <button  className='downlift' > Share The Above Decision in Inner Circle </button> <br/>
    <div className='cold'> Comments</div>
    <div className='us'> No comments shared yet.</div>
    </div> 
    </div>
    </div>
    
    </>
  )
}

export default Shared2