
import React from 'react';
import '../Components/How.css';
import Navbar from './Navbar';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { MdRectangle } from "react-icons/md";

const data1 = [
  { name: 'Carrer:1 (10.00%)', value: 400 },
  { name: 'Personal:1 (10.00%)', value: 400 },
  
];
const COLORS = ['#525154', '#6b538c'];

const data2=[
  {name:'Hiring:1(21.00%)',value:100}

];

const How = () => {

  const navigate = useNavigate();

  const handleIn = () => {
    navigate("/Add");
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
      <div className='smi'>

      <div className='tree'>
          <button onClick={handleIn} className='bunt'>ADD DECISION</button>
        </div>
        <div className='dancingbreak'>
          <button className='buttercream'>TABLE VIEW</button>
          <button onClick={browse} className='buttercream'>TIMELINE VIEW</button>
          <button onClick={doing} className='buttercream'>HOW AM I DOING</button>
        </div>
       
        <div className='cont' > 
<div className='outline'> 
<table className='rea'>
   
      <tr>
        <th >Tag Name</th>
        <th >Decisions Count </th>
        <th > Tag Type </th>
      </tr>
    
    
      <tr>
        <td >Hiring</td>
        <td>1</td>
        <td>Advanced Tags</td>
        
      </tr>
      <tr>
        <td>Carrer</td>
        <td>1</td>
        <td>Sharpen the Saw</td>
        
      </tr>
      <tr>
        <td>Personal</td>
        <td>1</td>
        <td>Sharpen the Saw</td>
        
      </tr>
    
  </table>
</div>
  </div>
  <div className='sharp'> <div>Sharpen The Saw Tags </div> <div> Advanced Tags</div>
  </div>
  <div className='hire'> 
  <div><MdRectangle style={{color:'#525154'}} /> Carrer </div> <div><MdRectangle style={{color:'#6b548c'}} /> Personal</div></div>
  <div className='now'><MdRectangle style={{color:'#525154'}} /> Hiring </div>
  
    <PieChart width={400} height={400} className='open'>
    <Pie
      data={data1}
      outerRadius={100}
    >
      {data1.map((entry, index) => (
        <Cell  fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip /> 
  </PieChart>

    <PieChart width={400} height={400} className='close'>
    <Pie
      data={data2}
      outerRadius={100}
    >
      {data2.map((entry, index) => (
        <Cell  fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip /> 
  </PieChart>


      </div>
    </>
  );
};

export default How;


