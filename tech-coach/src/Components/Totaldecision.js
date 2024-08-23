

import React from 'react';
import Navbar from './Navbar';
import '../Components/Totaldecision.css';
import { useNavigate } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { faPen, faTrash,faEye, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Totaldecision = () => {
  const navigate = useNavigate();

  const handleIn = () => {
    navigate("/Add");
  };

  const leave=()=>{
    navigate("/Add")
  }

  const dust=()=>{
    const userConfirmed = window.confirm('Are you sure that you want to delete this decision?');
    if (userConfirmed) {
      console.log('Decision deleted');
    } else {
      console.log('Deletion cancelled');
    }
    
  }

  const pond=()=>{
    navigate("/Eye")
  }
  const attach=()=>{
    navigate("/Link")
  }
  const browse=()=>{
    navigate("/Timeline")
  }
  const doing=()=>{
    navigate("/How")
  }

  

  return (
    <>
      <Navbar />

      <div className='col'>
        <div className='dan'>
          <button onClick={handleIn} className='bun'>ADD DECISION</button>
        </div>
        <div className='dancing'>
          <button className='cream'>TABLE VIEW</button>
          <button onClick={browse} className='butter'>TIMELINE VIEW</button>
          <button onClick={doing} className='butter'>HOW AM I DOING</button>
        </div>
        <div className='show'>
          <Switch {...{ inputProps: { 'aria-label': 'Switch demo' } }} defaultChecked color="default"  />
          <label>Show Pending Decisions</label>
        </div>
        <div>
          <input type='text' className='search' placeholder='Search by decision name or Tag name' />
        </div>

        <div className='table-container'> 

        <table className='reason'>
           
              <tr>
                <th >#</th>
                <th >Decision Name</th>
                <th >Due Date </th>
                <th >Taken Date</th>
                <th >Details</th>
                <th >Tags</th>
                <th >Reasons</th>
                <th >Comments</th>
                <th >Action</th>
              </tr>
            
            
              <tr>
                <td >1</td>
                <td>llll</td>
                <td>8/22/2024</td>
                <td>5/8/2024</td>
                <td>jjjjj</td>
                <td>Career, Hiring</td>
                <td>nnnnnnn</td>
                <td>No Comments Found</td>
                <td>
                <div className='icon'> 
                  <FontAwesomeIcon icon={faPen}  onClick={leave}/> 
                  <FontAwesomeIcon icon={faTrash} onClick={dust}  /> 
                  <FontAwesomeIcon icon={faEye }  onClick={pond} /> 
                  <FontAwesomeIcon icon={faLink} onClick={attach} /> 
              </div>  </td>
              </tr>
              <tr>
                <td>2</td>
                <td>kkkk</td>
                <td>8/21/2024</td>
                <td>7/16/2024</td>
                <td>jooo</td>
                <td>Personal</td>
                <td>jjjjjjjjjjj</td>
                <td>No Comments Found</td>
                <td>
                  <div className='icon'> 
                  <FontAwesomeIcon icon={faPen} onClick={leave} /> <FontAwesomeIcon icon={faTrash} onClick={dust}  /> <FontAwesomeIcon icon={faEye}  onClick={pond} /> <FontAwesomeIcon icon={faLink} onClick={attach} />
                  </div>  </td>
              </tr>
            
          </table>
        </div>
      </div>
    </>
  );
};

export default Totaldecision;
