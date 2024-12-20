import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./modules/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "mui-app-academy",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
