import { ActionTypes } from '../constants/actionTypes';
const {SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT} = ActionTypes;
const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

const selectProduct = (product) => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}
const removeSelectedProduct = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT
        
    }
}

export { setProducts, selectProduct, removeSelectedProduct };

