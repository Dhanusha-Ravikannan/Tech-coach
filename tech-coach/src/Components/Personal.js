import React from 'react';
import Navbar from './Navbar';
import '../Components/Personal.css';

const Personal = () => {
  return (
    <> 
    <Navbar> </Navbar>
    <div className='snippet'> 
    <div className='okay'> 
    <div className='deta'> Profile Details</div>
   
    <div className='hhi'> 
    <label> Attitude: </label>
    <input className='soon' type='text' placeholder='Attitude'/>
    <div className='addi'> 
     <button className='eat'> Add </button> 
     <button className='sleep'> Remove </button></div>
   
    <label> Strength:</label>
    <input className='soon'  type='text' placeholder='Strength'/> 
    <div className='addi'> 
     <button className='eat'> Add </button> 
     <button className='sleep'> Remove </button> </div>
    
    <label> Weakness: </label>
    <input className='soon' type='text' placeholder='Weakness'/> 
    <div className='addi'> 
     <button className='eat'> Add </button> 
     <button className='sleep'> Remove </button> </div>
   
    <label> Opportunity: </label>
    <input className='soon' type='text' placeholder='Opportunity'/>
    <div className='addi'> 
     <button className='eat'> Add </button> 
     <button className='sleep'> Remove </button> </div>
    
    <label> Threat: </label>
    <input className='soon' type='text' placeholder='Threat'/>
    <div className='addi'> 
     <button className='eat'> Add </button> 
     <button className='sleep'> Remove </button> </div>
     <button className='noon'> Save </button>

</div>
</div>

</div>
    
    </>


    
  );
}

export default Personal