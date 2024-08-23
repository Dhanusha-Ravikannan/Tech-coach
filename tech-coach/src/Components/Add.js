import React from 'react';
import Navbar from './Navbar';
import '../Components/Add.css';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Add = () => {
  return (
    <>
      <Navbar/>
    <div className='pho'> 

      <h2 className='det'>DETAILS</h2>
      
    <div className='total'> 
      <div className='add'> 
        <form>
          <br/>
          <div>
            <label>Decision Name:</label> 
            <input type='text' placeholder='Enter the decision name' required/>  
            <button >Clear</button>
          </div>
          <div>
            <label>Decision Due Date:</label>
            <input type='date' /> 
            <button>Clear</button>
          </div>
          <div>
            <label>Decision Taken Date:</label>
            <input type='date'/> 
            <button >Clear</button>
          </div>
          <div>
            <label>Decision Details:</label>
            <input type='text' placeholder='Enter the statements' required/> 
          </div>
          <div>
            <label>Decision Reasons:</label>
            <input type='text' placeholder='Enter the decision reason' required/> 
            <button  style={{backgroundColor: 'rgb(65, 60, 60)'}}> Remove</button>
          </div>
          <div>
            <button className='aaadd'> ADD  ANOTHER  REASON</button>
          </div>
         

<table className='before'> 
  <tr>
    <th colSpan={4}>  <div>
            <label>Select Tags:</label>
            <input type='text' placeholder='Search tags' required/>
          </div></th>
  </tr>
  <tr>
    <div className='pos'> 
  <td> <div>  <Checkbox {...label} />
            <label>  Personal </label> </div>
          <div> <Checkbox {...label} />
            <label>  Health </label> </div>
          <div> <Checkbox {...label}/>
            <label>Safety  </label>  </div>
          <div> <Checkbox {...label}/>
            <label> Hobby   </label>  </div>
          <div> <Checkbox {...label}/>
            <label>Financial Gain </label>  </div>   </td>
  <td><div> <Checkbox {...label}/>
            <label> Career </label> </div>
          <div> <Checkbox {...label}/>
            <label>  Spiritual</label> </div>
          <div> <Checkbox {...label}/>
             <label>Gone Bad </label></div>
          <div> <Checkbox {...label}/>
            <label> Travel </label></div>
          <div><Checkbox {...label}/>
            <label> Routine </label></div>    </td>
  <td><div>  <Checkbox {...label}/>
            <label> Work </label></div>
            <div><Checkbox {...label}/>
            <label>  Long Term </label></div>
            <div><Checkbox {...label}/>
            <label>  Regretting </label></div>
            <div><Checkbox {...label}/>
            <label>  Best  </label></div>
            <div><Checkbox {...label}/>
            <label>  Good  </label></div> </td>
    <td><div><Checkbox {...label}/>
            <label> Family</label></div>
            <div><Checkbox {...label}/>
            <label>  Short Term</label></div>
            <div><Checkbox {...label}/>
            <label> Hasty  </label></div>
            <div><Checkbox {...label}/>
            <label>  Time Sensitive  </label></div>
            <div><Checkbox {...label}/>
            <label> Financial Loss  </label></div> </td>
    
          </div>
     </tr>
</table>
          <div>
            <button className='aaadd'> SHOW  ADVANCED  TAGS</button>
          </div>
          <div>
            <button className='aaadd'> HIDE  ADVANCED  TAGS</button>
          </div>

          
<table className='before'> 
  <tr >
    <th colSpan={4} >  <div>
            <label>Advanced Tags:</label>
            <input type='text' placeholder='Search tags' required/>
          </div></th>
  </tr>
  <tr>
    <div className='post'> 
  <td> <div>  <Checkbox {...label} />
            <label>   Board </label> </div>
          <div> <Checkbox {...label} />
            <label>  Employee </label> </div>
          <div> <Checkbox {...label}/>
            <label>  Operational </label>  </div>
          <div> <Checkbox {...label}/>
            <label>Prospect   </label>  </div>
           </td>
  <td><div> <Checkbox {...label}/>
            <label> Brand</label> </div>
          <div> <Checkbox {...label}/>
            <label>  Expense</label> </div>
          <div> <Checkbox {...label}/>
             <label>  Partner </label></div>
          <div> <Checkbox {...label}/>
            <label>  Sales </label></div>
             </td>
  <td><div>  <Checkbox {...label}/>
            <label> Consultant </label></div>
            <div><Checkbox {...label}/>
            <label>   Hiring </label></div>
            <div><Checkbox {...label}/>
            <label>  Policy </label></div>
            <div><Checkbox {...label}/>
            <label>   Services </label></div>
            </td>
    <td><div><Checkbox {...label}/>
            <label>  Corporate Governance</label></div>
            <div><Checkbox {...label}/>
            <label> Investment</label></div>
            <div><Checkbox {...label}/>
            <label>  Product  </label></div>
            <div><Checkbox {...label}/>
            <label>   Statutory Compliance  </label></div> </td>
          </div>
     </tr>
</table>
<div>
            <button className='aaadd'>DECISION DRIVER TAGS </button>
          </div>
<div className='driven'> 
            <div><Checkbox {...label}/>
            <label>   Fully Data Driven </label></div>
            <div><Checkbox {...label}/>
            <label>   Not Data Driven  </label></div>
            <div><Checkbox {...label}/>
            <label>Partially Data Driven </label></div>
 </div>

          <div>
            <button style={{backgroundColor: 'rgb(65, 60, 60)'}} className='save'> Save</button>  
            <button style={{backgroundColor: 'rgb(65, 60, 60)'}} className='cancel'> Cancel</button> 
          </div>
           
        </form>
      </div>
    </div>
    </div>

  
    </>
  );
}

export default Add;
