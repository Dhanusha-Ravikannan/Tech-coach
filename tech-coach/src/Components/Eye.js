import React from 'react';
import '../Components/Eye.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Eye = () => {
    const navigate =useNavigate();
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
        <div> Decision Name: llll</div>
        <div> Decision Details: jjjjj</div>
        <div> Decision Reasons: nnnnnnn </div>
        <div> Decision Due Date: 2024-08-22 </div>
        <div> Decision Taken Date: 2024-05-08 </div>
        <div> Selected Tags: Career </div>
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

export default Eye