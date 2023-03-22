import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, CartItem } from '../store/types';
import { updateCartQuantity, removeFromCart } from '../store/actions';

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart)

    const handleQuantityChange = (id: number, quantity: number) => {
        dispatch(updateCartQuantity({ id, quantity }))
    }

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>The cart is empty</p>
            ) : (
                <div>
                    {cart.map((item: CartItem) => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>Price: ${item.price}</p>
                            <p>
                                Quantity:{' '}
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, +e.target.value)
                                    }
                                />
                            </p>
                            <button onClick={() => handleRemoveFromCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <p>Total: ${calculateTotalPrice()}</p>
                </div>
            )}
        </div>)
}

export default ShoppingCart