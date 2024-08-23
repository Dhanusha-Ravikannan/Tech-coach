import React from 'react'
import Navbar from './Navbar'
import '../Components/Innercircle.css';

const Innercircle = () => {
  return (
    <> 

    <Navbar/>
    <div className='project'> 
   
        <br/>
        <div className='innercircle'>
        <div className='happy'> Inner Circle Details</div>
        <div className='hi'> 
        <label> Members:</label> 
        <button className='on'> Dhanusha R (dhanusharavikannan21@gmail.com) - Accepted </button>  <br/>
        <label> Add Members:</label>
        <div>
        <input className='onto' type='text' placeholder='Search by email'/>
        <button className='rem'> Remove</button>
        </div>
    
        </div>
    </div>
    </div>
        
  

    </>
  )
}

export default Innercircle;