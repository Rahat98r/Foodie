import React, { createContext, useEffect, useReducer } from 'react'
import fetchApi from '../data/FetchApi'
 export const cartContext = createContext()

 const initialState = {
  items:JSON.parse(localStorage.getItem("cart")) || []
  // items: []
 }
const reducer =(state,action)=>{
  switch(action.type){
    case "add" :{
 const existingItem = state.items.findIndex((item)=> item.idMeal === action.item.idMeal);
 if(existingItem !== -1){
  const updatedItems = [...state.items];
  updatedItems[existingItem] = {
    ...updatedItems[existingItem],
    quantity:updatedItems[existingItem].quantity + 1
  };
  return  {
    ...state,
    items : updatedItems
  }
 }
      return{
...state,
items:[...state.items,{...action.item,quantity:1}]
      }
    }
    case "remove" :{
       const existingItemIndex = state.items.findIndex((item)=> item.idMeal === action.id);
         if (existingItemIndex === -1) return state;
       const existingItem = state.items[existingItemIndex]


       if(existingItem.quantity > 1){
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] ={
          ...existingItem,
          quantity : existingItem.quantity-1
        }
          return {
      ...state,
      items: updatedItems
    };
       }
      else{
 const updatedItems = state.items.filter((item)=> item.idMeal !== action.id);

       
      
      return{
        ...state,
        items:updatedItems
      }
    }}
    default :
   return state;
  }
 
}

const GlobalContext = ({children}) => {
  const {datas,loading,error} = fetchApi();
  const[state,dispatch]=useReducer(reducer,initialState)
  const add=(item)=>{
dispatch({type:"add",item})


  }
  const remove=(id)=>{
    dispatch({type:"remove",id})
  }
   useEffect(()=>{
  localStorage.setItem("cart",JSON.stringify(state.items))
 },[state.items])
  const cartCtx ={
    items:state.items,
    add,remove

  }
  return (
 <cartContext.Provider value={{datas,loading,error,cartCtx}}>{children}</cartContext.Provider>
  )
}

export default GlobalContext
