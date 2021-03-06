import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './rootReducer';

const store = (initialState) => (
    createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(ReduxThunk)),
    )
);

export default store;
