import * as TYPES from '../constants/ActionTypes';

export const addCart = cartData => ({ type: TYPES.ADD_PIZZA, cartData });
export const getPizza= id => ({ type: TYPES.GET_PIZZA , id });

export const initPizza = () => {
    return {
        type: TYPES.INIT_PIZZA
    };
};