import React, { useContext, useMemo } from 'react'
import { cartContext } from '../contexts/GlobalContext'
import Card from './ui/Card'
import Loader from './ui/Loader'

const Cards = () => {
    const{datas,loading,error} =useContext(cartContext)
  
const pricedData = useMemo(()=>{
  return datas?.slice(0,12).map((item)=>{
    return {
      ...item,
 price : ((parseInt(item.idMeal) % 40) + 5 + 0.99).toFixed(2)
    }
  })
},[datas])
  return (
    <div className=' flex items-center justify-center min-h-screen'>
      <div className='my-auto'>
{loading && <Loader/>}
      </div>
        
        {error && <h1>{error}</h1>}
        <div className='grid grid-cols-1 gap-9 
                sm:grid-cols-2 
                md:grid-cols-3 
                xl:grid-cols-4 
                justify-items-center'>
          
 {pricedData&& pricedData.map((item) =>{
            return(
                <Card key={item.idMeal} idMeal = {item.idMeal} image={item.strMealThumb} name={item.strMeal} origin={item.strArea} category={item.strCategory} price={item.price}/>
            )
        })}
        </div>
       
        
        
    </div>
  )
}

export default Cards