import React from 'react';
import img from '../images/tech.png';
import '../Components/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';




const Login =()=>{
    const navigate= useNavigate();

    const user=()=>{
        navigate('/Login1')
    }

    return(
        <>

    <div className='bggg'> 
            <img className='img' src={img} alt='Tech'/>
            
            <h2 className='home'> Home </h2>
            
    </div>

    

<section className='back'> 
<div className='in'>
         <h1 className='log'> Login</h1>  
         <button onClick={user} className='sign'> 
        <FontAwesomeIcon icon={faGoogle} className='font' /> SIGN IN WITH GOOGLE
        </button>
</div>

</section>


        </> 
    );
}

export default Login;




