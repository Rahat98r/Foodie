import React, { useContext } from 'react'
import { cartContext } from '../contexts/GlobalContext'
import Delete from './ui/Delete'

const Cart = () => {
 const {cartCtx}= useContext(cartContext)
 
 
const totalPrice = cartCtx.items.reduce((acc,item)=>{
  return acc + item.price * item.quantity
},0)

  return (
    <div className='w-full min-h-screen bg-neutral-700 text-white px-4 py-6 '>{cartCtx.items.map((item)=>{
      return(
      <li key={item.idMeal} className='max-w-[600px] mx-auto mt-2'><div className=' flex justify-between items-center gap-3.5'>
        <div className='flex justify-center items-center gap-2'>
 <img src={item.image} className='h-[60px] w-[60px] object-cover rounded-md' />
 <p className='text-lg font-medium'>{item.name}</p>
        </div>
        
        <p>{item.quantity}</p>
        <p>{`${item.price*item.quantity.toFixed(2)} $`}</p>
       
       
      <Delete removeItem={()=> cartCtx.remove(item.idMeal)}/>
        </div>
        
        </li>
        
    )
    }
    )}<h2 className='block mx-auto text-center'>Total: ${totalPrice.toFixed(2)}</h2></div>
  )
}

export default Cart