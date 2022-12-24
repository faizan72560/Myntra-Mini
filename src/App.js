import React from 'react'
import Button from '@mui/material/Button';
import Navbar from './Components/Navbar';
import Items from './Components/Items';

import Sidebar from './Components/Sidebar';
import ResponsiveDrawer from './Components/Sidebar';
import Cart from './Components/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <div className='flex'> */}

      {/* <Items/> */}
      {/* </div> */}

      {/* <ResponsiveDrawer/> */}
      {/* <Cart/> */}


      <Router>
          
           <Routes>
                 <Route exact path='/' element={<ResponsiveDrawer/>}></Route>
                 <Route exact path='/cart' element={<Cart/>}></Route>
                
          </Routes>
         
       </Router>
      
     
    </div>
  )
}

export default App