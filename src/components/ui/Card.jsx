import React, { useContext } from 'react';
import styled from 'styled-components';
import { cartContext } from '../../contexts/GlobalContext';

const Card = ({image,name,origin,category,price,idMeal}) => {
  const{cartCtx}=useContext(cartContext)
 

  const addItem =()=>{
     const item = {
    idMeal
    ,  
    name,
    origin,
    category,
    image,price,
  }
    cartCtx.add(item)
                                                       
  }
  return (
    <StyledWrapper image={image}>
      <div className="book">
        <div className='mt-[50px] text-white'>
<p>Meal : {name}</p>
<p>Origin : {origin}</p>
<p>Category : {category}</p>
<p>Price : {`${price}$`}</p>
<button className='text-white block mx-auto px-[15px] py-[5px] rounded-[10px] bg-yellow-500 hover:' onClick={addItem}>Add To Cart</button>
        </div>
        
        <div className="cover">
          
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .book {
    position: relative;
    
    width: 220px;
    height: 300px;
    background-color: black;
 
    box-shadow: 1px 1px 12px #000;
    transform: preserve-3d;
    perspective: 2000px;
    display: flex;
    align-items: top;
    justify-content: center;
    color: #000;
      background-image: url(${props => props.image});
      background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
  }

  .cover {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 1px 1px 12px #000;

    
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .book:hover .cover {
    transform: rotateY(-80deg);
  }

  p {
    font-size: 20px;
    font-weight: bolder;
  
    padding: 5px;
    
    // color:white;
  }
`;
export default Card;
