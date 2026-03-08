import React from 'react'
import Card from './components/ui/Card'
import Cards from './components/Cards'
import Header from './components/Header'
import {Route,Routes} from "react-router"
import Cart from "./components/Cart"


const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-neutral-700">
      
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <Header />

        <div className="w-full  p-4">
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App