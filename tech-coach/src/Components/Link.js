import React from 'react';
import Navbar from './Navbar';
import '../Components/Link.css';
import { useNavigate } from 'react-router-dom';

const Link = () => {

    const navigate =useNavigate();
    const song=()=>{
        navigate ("/Getlink")
    }
  return (
    <>
    <Navbar/>
   
    <div className='two'>
    <div className='horizontal'> 
    <div className='zero'> 
    <div className='one'> llll </div>
    <div className='hunt'> 637 </div>     </div>
    <div className='verti'>
        <button className='three'>SWOT Analysis </button> 
        <button className='four'> Save SWOT Link </button> </div> <br/>

  
    <div className='zone'> 
        <button className='five'> Soft-Skills Analysis </button> 
        <button className='six'> Save Soft-Skill Link </button>
    </div>

     <button className='getlink' onClick={song}> Go to GetLink Page </button>  
    </div>
    </div>
    </>
  )
}

export default Link