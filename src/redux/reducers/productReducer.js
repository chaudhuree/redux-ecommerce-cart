import { ActionTypes } from '../constants/actionTypes';
const initialState = {
    products: [{
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Product 1 description',
    }],
    name: 'chaudhuree'
}
export const productReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state,products:payload}
    default:
      return state;
  }
};
