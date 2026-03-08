import React from 'react'
import { Link,Route,Routes } from 'react-router'
const Header = () => {
  return (<>
      <nav className='flex justify-between px-[60px] py-[5px] bg-neutral-700 text-amber-500'>
       <Link to="/"><h1 className='text-[30px]'>Foodie</h1></Link> 
        
        
       <Link to="/cart"><h1 className='text-[30px]'>Cart</h1>     </Link>
            
    
    </nav>
      {/* <Routes>
       
        <Route path="/cart" element={<Cart/>} />
      </Routes> */}
  </>

   )
}

export default Header