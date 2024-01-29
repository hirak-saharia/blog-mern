import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
});

// create persist configuration
const persistConfig = {
  key: "root",
  storage, //import storate at the top
  version: 1,
};

// create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //to prevent error using Redux Toolkit
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ SerializableCheck: false }),
});

export const persistor = persistStore(store);
