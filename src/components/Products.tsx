import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { fetchProductsRequest, addToCart } from '../store/actions';

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch(fetchProductsRequest([]))
    }, [dispatch])

    const handleAddToCart = (id: number) => {
        const product = products.find((p) => p.id === id);
        if (product) {
            dispatch(addToCart({ ...product, quantity: 1 }))
        }
    }

    return (
        <div>
            <h2>Products</h2>
            {products.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            <button onClick={() => handleAddToCart(product.id)}>
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Products