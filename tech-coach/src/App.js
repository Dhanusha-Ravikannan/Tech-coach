import React from 'react';
import Login from './Components/Login';
import Login1 from './Components/Login1';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Totaldecision from './Components/Totaldecision';
import Add from './Components/Add';
import Innercircle from './Components/Innercircle';
import Notification from './Components/Notification';
import Profile from './Components/Profile';
import Personal from './Components/Personal';
import Softskill from './Components/Softskill';
import Softskill2 from './Components/Softskill2';
import Eye from './Components/Eye';
import Link from './Components/Link';
import Getlink from './Components/Getlink';
import Timeline from './Components/Timeline';
import How from './Components/How';
import Sharedwitme from './Components/Sharedwitme';
import Shared from './Components/Shared';
import Shared2 from './Components/Shared2';


function App() {
  return (
    <> 
     <BrowserRouter> 
     <Routes>
      <Route path='/' element={<Login/>}> </Route>
      <Route path='/login1' element={<Login1/>}> </Route>
      <Route path='/Totaldecision'element={<Totaldecision/>}></Route>
      <Route path='/Add' element={<Add/>}></Route>
      <Route path='Innercircle' element={<Innercircle/>}> </Route>
      <Route path='Notification' element={<Notification/>}> </Route>
      <Route path='Profile' element={<Profile/>}> </Route>
      <Route path='Personal' element={<Personal/>}> </Route>
      <Route path='Softskill' element={<Softskill/>}> </Route>
      <Route path='Softskill2' element={<Softskill2/>}> </Route>
      <Route path='Eye' element={<Eye/>}> </Route>
      <Route path='Link' element={<Link/>}> </Route>
      <Route path='Getlink' element={<Getlink/>}> </Route>
      <Route path='Timeline' element={<Timeline/>}> </Route>
      <Route path='How' element={<How/>}> </Route>
      <Route path='Sharedwitme' element={<Sharedwitme/>}> </Route>
      <Route path='Shared' element={<Shared/>}> </Route>
      <Route path='Shared2' element={<Shared2/>}> </Route>
     
      </Routes>
      </BrowserRouter>
    
   </>
  );
}

export default App;









