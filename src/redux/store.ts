import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from "./reducer.ts";

// Configuration for redux-persist
const persistConfig = {
    key: 'e-learning', // key to persist the whole state or a specific part of it
    storage,     // storage engine to use (localStorage in this case)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            // Ignore paths in the state
            ignoredPaths: ['register', 'rehydrate'],
          },
        }),
});

// Create a persistor
export const persistor = persistStore(store);
