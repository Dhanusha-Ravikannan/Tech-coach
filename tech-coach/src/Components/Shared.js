import React from 'react';
import '../Components/Shared.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Shared = () => {
  const navigate= useNavigate();
  const shape=()=>{
    navigate ("/Shared2")
  }

  return (
  <> 
  <Navbar/>
  <div className='classname'> 
  <div className='bottle' onClick={shape} > 
  <div style={{fontSize:'1.3rem',fontWeight:'bold'}}>kkk </div>
  <div style={{fontSize:'1rem'}}> Shared By: Saranya Raj </div>

  </div>
  </div>
  
  </>
  )
}

export default Shared

