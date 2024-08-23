import React from 'react'
import '../Components/Profile.css';
import Navbar from '../Components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import {faUserPen} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate=useNavigate();
  const say=()=>{
    navigate("/Personal")
  }


  return (
    <>
    <Navbar/>
    
    <div className='color'> 
    
    <form className='cen'> 
    <div className='hit'> 
        <h2 className='pick'> Personal Details</h2><br/>
        <div>
            
               <h3>  UserName: <span className='naps'> Dhanusha R </span></h3>
               <h3> Email id: <span className='naps'> dhanushravi904@gmail.com </span></h3>
            <div className='picture'>    <FontAwesomeIcon icon={faCircleUser}  /> </div><br/>
            
        </div>
        <div className='edit'> 
        <button onClick={say} className='per'> Add Personal Detail </button>
        < FontAwesomeIcon icon={faUserPen} className='awe' onClick={say} /> </div><br/><br/>

        <div className='hifi'> 
        <button className='down'> Download my Decision data </button>
        <button className='load'> Download Profile data </button> </div><br/><br/>
        
        <button className='account'> Delete Account</button>
        </div>
    </form>
    </div>
   
    
    </>
  )
}

export default Profile



