import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./slices/ordersSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
    reducer:{
        orders:ordersSlice,
        products:productsSlice
    }
})