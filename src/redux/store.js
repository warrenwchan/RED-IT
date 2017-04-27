import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import { WeeksReducer, PostReducer } from './reducer'

const mockMiddleware = store => next => action => {
    console.log(store.getState())
    const done = next(action);
    console.log(store.getState())
    return done;
}

export default createStore (
    combineReducers({
        weeks: WeeksReducer,
        posts: PostReducer

    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        reduxLogger
        ),
);
