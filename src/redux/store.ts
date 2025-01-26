import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../redux/features/auth/authSlice'
import { authApi } from './features/auth/authApi'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, REGISTER, PURGE, PERSIST, PAUSE, REHYDRATE, FLUSH } from 'redux-persist'

const persistConfig = {
    key: 'auth',
    storage
}
const persistedReducer = persistReducer(persistConfig, authReducer)
export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);