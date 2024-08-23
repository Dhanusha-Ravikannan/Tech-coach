import React from 'react';
import '../Components/Softskill.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Softskill = () => {
    const navigate=useNavigate();
    const next=()=>{
        navigate("/Softskill2")
    }


  return (
    <> 
    <Navbar/>
   
    
    <div className='finish'> <br/>
    <div className='heaven'>
        
    <div className='self' > Soft Skills - Self Assessment </div>
    <div className='beauty'>
    <table >
        <tr > 
            <th > S.No </th>
            <th > Skill Name </th>
            <th > Rating(1-10) </th>
            <th > Confidence Level </th>
            <th > Assessment Notes and Action Plans </th>
        </tr>
        <tr > 
            <td > 1.  </td>
            <td > Verbal Communication  </td>
            <td > <input/>  </td>
            <td > <input/>  </td>
            <td > <textarea> </textarea> </td>
            
        </tr>
        <tr > 
            <td > 2.  </td>
            <td > Written Communication  </td>
            <td > <input/>  </td>
            <td > <input/>  </td>
            <td > <textarea> </textarea> </td>

        </tr>
        <tr > 
            <td > 3.  </td>
            <td > Time Management </td>
            <td > <input/>  </td>
            <td > <input/>  </td>
            <td > <textarea> </textarea> </td>

        </tr>
    </table>
    </div>
    <button onClick={next} className='shuttle'> SUBMIT </button>

    </div>
    
    </div>
    
    </>
    
  )
}

export default Softskill

