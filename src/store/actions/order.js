import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgeFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

export const purchaseBurger = (orderData) => {
  return dispatch => {
    purchaseBurgerStart();
    axios.post( '/orders.json', orderData )
    .then( response => {
      dispatch(purchaseBurgerSuccess(response.data, orderData))
    } )
    .catch( error => {
      dispatch(purchaseBurgeFail(error))
    } );
  }
}