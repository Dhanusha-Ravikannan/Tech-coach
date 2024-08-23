
import React from 'react';
import '../Components/Login1.css';
import { FaRegEye } from "react-icons/fa";
import { AiFillCarryOut } from "react-icons/ai";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


const Login1 =()=>{
    const navigate= useNavigate();
    const handleLogin=()=>{
        navigate("/Totaldecision")
    }
    const eyeShare=()=>{
        navigate ("/Sharedwitme")
    }
    const firstShare=()=>{
        navigate ("/Shared")
    }



    return(
        <>
        <Navbar/>
    <section className='test'> 
    <div className='hello'> 
        <button className='first' onClick={handleLogin}> <AiFillCarryOut />  Total Decisions 2 </button>
        <button className='first' ><FaRegHourglassHalf />  Pending Decisions 0</button>
        <button onClick={eyeShare} className='first' ><FaRegEye />  Shared with me 0 </button>
        <button onClick={firstShare} className='first' ><FaShareSquare /> Shared by me 1</button>
        
    </div>
    </section>


    
    </>
    )
}
export default Login1;

