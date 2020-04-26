import {
    ADD_PIZZA,
  } from '../../constants/ActionTypes';

  import pizzaData from '../../../data';


  export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};  

  const initialState = []; 

  const setCart = (state, action) => {   
    const cartData =  updateObject( state, action.cartData);
    const  data = [];
    if(localStorage.getItem('cart')){
         data.push(localStorage.getItem('cart'));
    }
    data.push(cartData);
    localStorage.setItem('cart',data);
    return data;
};
  
 const  cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PIZZA:
        return setCart(state, action);
      default:
        return state;
    }
  }
  
  export default cartReducer;