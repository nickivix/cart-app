import { createReducer } from '@reduxjs/toolkit';
import { addToCart, fetchProductsRequest, removeFromCart, updateCartQuantity } from './actions';
import { RootState, ActionTypes } from './types';


const initialState: RootState = {
    products: [],
    cart: [],
}

export const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchProductsRequest, (state, action) => {
            state.products = action.payload
        })
        .addCase(addToCart, (state, action) => {
            const { id, name, price } = action.payload
            const index = state.cart.findIndex((item) => item.id === id)
            if (index !== -1) {
                state.cart[index].quantity++
            } else {
                state.cart.push({ id, name, price, quantity: 1 })
            }
        })
        .addCase(removeFromCart, (state, action) => {
            const index = state.cart.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state.cart.splice(index, 1)
            }
        })
        .addCase(updateCartQuantity, (state, action) => {
            const { id, quantity } = action.payload
            const index = state.cart.findIndex((item) => item.id === id)
            if (index !== -1) {
                state.cart[index].quantity = quantity
            }
        })
})