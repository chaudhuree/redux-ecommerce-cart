import { ActionTypes } from '../constants/actionTypes';
const {SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT} = ActionTypes;
const initialState = {
    products: [],
    product:{}
}
export const productReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case SET_PRODUCTS:
      return {...state,products:payload};
    case SELECTED_PRODUCT:
      return {...state,product:payload};
      case REMOVE_SELECTED_PRODUCT:
      return {...state,product:{}};
    default:
      return state;
  }
};
