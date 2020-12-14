import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer, { State } from './Users/usersReducer';


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [],
    blacklist: [],
    debug: true
}

const rootReducer = combineReducers ({
    user: usersReducer,

});


const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistedReducer = usersReducer;

export default persistedReducer;