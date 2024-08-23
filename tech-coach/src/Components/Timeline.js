

import React from 'react'
import Navbar from './Navbar'
import '../Components/Timeline.css';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Timelineee = () => {
  const navigate = useNavigate()

  const handleIn = () => {
    navigate("/Add");
  };

  const browse=()=>{
    navigate("/Timeline")
  }

  const tview=()=>{
    navigate("/Totaldecision")
  }
  const doing=()=>{
    navigate("/How")
  }

  const [openTag, setOpenTag] = useState(false);

  const toggleTag = () => {
    setOpenTag(!openTag);
  };



  return (
    <>

    <Navbar/>
    <div className='time'> 
    <div className='dan'>
          <button onClick={handleIn} className='bun'>ADD DECISION</button>
        </div>
        <div className='dancing'>
          <button onClick={tview} className='cream'>TABLE VIEW</button>
          <button onClick={browse} className='butter'>TIMELINE VIEW</button>
          <button onClick={doing} className='butter'>HOW AM I DOING</button>
        </div>
        <div className='show'>
          <Switch {...{ inputProps: { 'aria-label': 'Switch demo' } }} defaultChecked color="default"  />
          <label>Show Pending Decisions</label>
        </div>


           <div className='tag-dropdown'> 
       
          <button onClick={toggleTag} className='caret'>
            All tags <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {openTag && (
            <div className='tag-name'> 
              <ul> 
                <li> All tags </li>
                <li> Advanced tags</li>
                <li> Sharpen the saw </li>
                <li> Time Span </li>
                <li> Outcome </li>
                <li> Decision Maturity</li>
                <li> Financial Outcome</li>

              </ul>
              
              
               </div> 
          )}
          </div> 

        <div className='line'>  
        <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{backgroundColor:'#454647'}}   />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontWeight:'bold',fontSize:'1.1rem'}}>July 2024</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot style={{backgroundColor:'#343536'}}   />
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent><button style={{fontWeight:'bold',fontSize:'1.1rem'}}> kkkkkkk </button></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{backgroundColor:'#343536'}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontWeight:'bold',fontSize:'1.1rem'}}>May 2024</TimelineContent>
      </TimelineItem>
      <TimelineItem >
        <TimelineSeparator >
          <TimelineDot style={{backgroundColor:'#343536'}}  />
        </TimelineSeparator>
        <TimelineContent ><button style={{fontWeight:'bold',fontSize:'1.1rem'}}> llllllllll </button></TimelineContent>
      </TimelineItem>
    </Timeline >

    </div>
    </div> 
    
    </>

  )
}

export default Timelineee