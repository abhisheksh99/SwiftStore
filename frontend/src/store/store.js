import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/authSlice";
import productReducer from "./admin-slice/poductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

export default store;
