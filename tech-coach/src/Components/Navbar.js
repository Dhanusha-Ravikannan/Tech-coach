

import React, { useState } from 'react';
import '../Components/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faFileCircleQuestion, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { FaBook } from "react-icons/fa";
import { IoIosRefreshCircle } from "react-icons/io";
import imagee from '../images/tech.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);

  const toggleProfileMenu = () => {
    setOpenProfile(!openProfile);
  };

  const navigateTo = (path) => {
    navigate(path);
    setOpenProfile(false);
  };



  return (
    <> 
      <section className='sec'> 
        <img className='im' src={imagee} alt='Tech'/>
        <div className='nav'> 
          <button onClick={() => navigateTo("/Login1")} className='sett'><FontAwesomeIcon icon={faChartArea} /> Dashboard</button> 
          <button onClick={()=>navigateTo("/Totaldecision")} className='sett'><FontAwesomeIcon icon={faFileCircleQuestion} /> Decision</button>
          <button  className='sett'><FaBook /> Guide</button>
          <button onClick={() => navigateTo("/Innercircle")} className='sett'><IoIosRefreshCircle /> Inner Circle</button>
          <button onClick={() => navigateTo("/Notification")} className='sett'><FontAwesomeIcon icon={faBell} /> Notifications</button>
          <div className='profile-dropdown'>
            <button onClick={toggleProfileMenu} className='king'><FontAwesomeIcon icon={faUser} /> Profile</button>  
            {openProfile && (
              <div className='dropdown-menu'>
                <ul>
                  <li onClick={() => navigateTo("/Profile")}>Profile</li>
                  <li onClick={() => navigateTo("/Softskill")}>Soft Skills</li>
                  <li onClick={()=> navigateTo("/")}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar;



