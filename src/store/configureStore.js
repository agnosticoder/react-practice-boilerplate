import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//======================================================================================Store
//Store Creation - with combineReducers helps us to set root 
//property to the state maintained by individual reducer
const getStore = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer
        }
    ),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

export default getStore;