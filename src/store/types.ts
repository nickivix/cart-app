export interface Product {
    id: number
    name: string
    price: number
}

export interface CartItem extends Product {
    quantity: number
}

export interface RootState {
    products: Product[]
    cart: CartItem[]
}

export enum ActionTypes {
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY',
}

export interface FetchProductsSuccessAction {
    type: ActionTypes.FETCH_PRODUCTS_SUCCESS
    payload: Product[]
}

export interface AddToCartAction {
    type: ActionTypes.ADD_TO_CART
    payload: CartItem
}

export interface RemoveFromCartAction {
    type: ActionTypes.REMOVE_FROM_CART
    payload: number
}

export interface UpdateCartQuantityAction {
    type: ActionTypes.UPDATE_CART_QUANTITY
    payload: {
        id: number
        quantity: number
    }
}

export type Action =
    | FetchProductsSuccessAction
    | AddToCartAction
    | RemoveFromCartAction
    | UpdateCartQuantityAction
    | { type: string; payload: any }