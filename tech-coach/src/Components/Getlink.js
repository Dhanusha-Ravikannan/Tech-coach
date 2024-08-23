import React from 'react';
import Navbar from './Navbar';
import '../Components/Getlink.css';
import { useNavigate } from 'react-router-dom';

const Getlink = () => {

    const navigate=useNavigate();
    const goback=()=>{
        navigate("/Totaldecision")
    }
  return (
    <> 
    <Navbar/>
    <div className='callback'> 
    <div className='hyperactive'> Skills:</div>
    <div className='activee'> 
        <button> Verbal Communication </button>
        <button> Written Communication </button>
        <button> Time  Management  </button>
    </div><br/>
    <div className='superactive'> Profiles: </div>
    <div className='topmost'> 
    <button> Attitude </button>
    <button> Strength </button>
    <button> Weakness </button>
    <button> Opportunity </button>
    <button> Threat </button>
    </div>
    <button className='supername' onClick={goback}> Go Back Add Decisions </button>
    </div>
    </>
    
  )
}

export default Getlink