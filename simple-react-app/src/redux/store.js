import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import { reducer } from './reducers/reducer';

const middlewares = [
    ThunkMiddleware,
    logger
]
const store = createStore(
    reducer,
    {},
     composeWithDevTools(applyMiddleware(...middlewares))
)

export default store;