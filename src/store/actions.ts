import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { Product, CartItem, ActionTypes } from './types';

export const fetchProductsRequest = createAction<Product[]>(
    ActionTypes.FETCH_PRODUCTS_REQUEST
)

export const fetchProductsSuccess = createAction<Product[]>(
    ActionTypes.FETCH_PRODUCTS_SUCCESS
)

export const fetchProductsFailure = createAction(
    ActionTypes.FETCH_PRODUCTS_FAILURE
)

export const addToCart = createAction<CartItem>(
    ActionTypes.ADD_TO_CART
)

export const removeFromCart = createAction<number>(
    ActionTypes.REMOVE_FROM_CART,

)

export const updateCartQuantity = createAction<{
    id: number
    quantity: number
}>(ActionTypes.UPDATE_CART_QUANTITY)

