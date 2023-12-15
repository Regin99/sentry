import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {MMKV} from 'react-native-mmkv';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  Storage,
  persistReducer,
  persistStore,
} from 'redux-persist';
import {walletsSlice} from './slices';
import {setupListeners} from '@reduxjs/toolkit/query';

const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['wallets'],
  timeout: 0,
};

const reducers: any = combineReducers({
  wallets: walletsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const createDebugger = require('redux-flipper').default;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(createDebugger()),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
