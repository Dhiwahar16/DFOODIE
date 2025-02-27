import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {persistStore,persistReducer} from 'redux-persist'
import sessionStorage from "redux-persist/lib/storage/session";
import MenuReducer from './features/Menubar/MenuSlice'
import CategoryReducer from './features/Category/CategorySlice'
import CartReducer from './features/Cart/CartSlice'

const persistConfig={
    key:"root",
    storage:sessionStorage,
}

const RootReducer=combineReducers({
    menu:MenuReducer,
    category:CategoryReducer,
    cart:CartReducer,
})

const persistedReducer=persistReducer(persistConfig,RootReducer);

export const Store=configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export const persistor=persistStore(Store);