import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductsSuccess, fetchProductsFailure } from './actions';
import { ActionTypes } from './types';
import { SagaIterator } from 'redux-saga';

function* fetchProducts(): SagaIterator {
    try {
        const response = yield call(fetch, '/api/products');
        const products = yield response.json();
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailure());
    }
}

export function* rootSaga(): SagaIterator {
    yield takeLatest(ActionTypes.FETCH_PRODUCTS_REQUEST, fetchProducts);
}