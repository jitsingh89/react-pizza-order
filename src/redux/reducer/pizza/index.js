import {
    INIT_PIZZA,
    GET_PIZZA,
  } from '../../constants/ActionTypes';

  import pizzaData from '../../../data';


  export const updateObject = (oldObject, updatedProperties) => {
    return [
        ...oldObject,
        ...updatedProperties
  ];
};  

  const initialState = []; 

  const setPizza = (state, action) => {
    const data = updateObject( state, pizzaData);
    return data;
};
const getPizza = (state, action) => {
  return state;
};

  
 const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {    
      case INIT_PIZZA:
          return setPizza(state, action); 
      case GET_PIZZA:
            return getPizza(state, action); 
      default:
        return state;
    }
  };
  
  export default pizzaReducer;
  