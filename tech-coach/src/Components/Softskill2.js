import React from 'react'
import '../Components/Softskill2.css'
import Navbar from './Navbar'

const Softskill2 = () => {
  return (
    <>
    <Navbar/> 
   
    <div className='stop'> <br/>
        <div className='sky'> 
    <div className='ready' > Soft Skills - Self Assessment </div>
    <div className='awesome'>
    <table >
        <tr > 
            <th > S.No </th>
            <th > Skill Name </th>
            <th > Rating(1-10) </th>
            <th > Assessment Notes and Action Plans  </th>
            <th > Improvement  </th>
        </tr>
        <tr > 
            <td > 1.  </td>
            <td > Verbal Communication  </td>
            <td > 7  </td>
            <td >   </td>
            <td > <button className='shade'> Edit </button>  <button className='paint'> Delete  </button> </td>
            
        </tr>
        <tr > 
            <td > 2.  </td>
            <td > Written Communication  </td>
            <td > 9  </td>
            <td >  </td>
            <td ><button className='shade'> Edit </button>  <button className='paint'> Delete  </button> </td>

        </tr>
        <tr > 
            <td > 3.  </td>
            <td > Time Management </td>
            <td > 2 </td>
            <td >   </td>
            <td > <button className='shade'> Edit </button>  <button className='paint'> Delete  </button>  </td>

        </tr>
    </table>
    </div>
    <button className='cork'> Delete All </button>
    </div>
    </div>
    </>
   
  )
}

export default Softskill2