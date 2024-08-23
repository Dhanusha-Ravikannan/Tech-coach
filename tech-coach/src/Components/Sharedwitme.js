import React from 'react'
import '../Components/Sharedwitme.css';
import Navbar from './Navbar';

const Sharedwitme = () => {
  return (
    <>
    <Navbar/>
    <div className='aria'>
    <div className='heat'> 
    <button  style={{width:'14rem', fontWeight: 'bold',fontSize:'0.9rem',borderRadius:'10px'} }> SHOW PENDING DECISIONS  </button>
    <button style={{width:'12rem',fontWeight: 'bold',fontSize:'0.9rem',borderRadius:'10px'}}> SHOW ALL DECISIONS </button>
    
   <button style={{width:'17rem',fontWeight: 'bold',fontSize:'1rem',borderRadius:'10px'}}> Sort by name </button>   
   </div>
   <br/>
    <div className='penddec'> No Pending Decisions</div>
    </div>
    
    </>
  )
}

export default Sharedwitme