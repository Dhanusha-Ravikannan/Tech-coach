import React from 'react'
import Navbar from './Navbar'
import '../Components/Notification.css';

const Notification = () => {
  return (
    <>
    <Navbar/>
<div className='camera'> 

<div className='request'> 
<div className='wake'>
    <div ><span className='spa'> Dhanusha R </span> is requesting you to join their inner circle </div>
    <br/>
    <div> Members of that inner circle: </div>
  
 <div > 
    <button className='yes'> Accept </button>
    <button className='short'> Reject </button>
</div>
</div>  
</div>


</div>
 
    </>
  )
}

export default Notification