import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar = () => {

   
  return (
    <div>
        <nav className='bg-cyan-400 h-14 w-screen sticky '>
            <ul className='flex sticky justify-between '>
                <li className=' flex flex-col items-center my-2  text-3xl text-white font-sans'>Myntra</li>
                <li className=' mx-6 flex'>
                    <div className='flex flex-col m-auto '>
                        <div className='flex justify-center'>
                    <h1 className='bg-blue-400 mx-1 w-3 rounded-2xl text-white'>1</h1>

                        </div>

                    
                    <AddShoppingCartIcon />
                    </div>
                
                </li>
                

            </ul>
        </nav>

        
    </div>
  )
}

export default Navbar