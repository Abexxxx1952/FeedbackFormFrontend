import { configureStore, combineReducers } from "@reduxjs/toolkit";

import formReducer from "../reducers/formReducer";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
