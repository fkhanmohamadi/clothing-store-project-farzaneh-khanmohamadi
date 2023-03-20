import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchOrderService } from "../../api/services/orders";

export const fetchOrders = createAsyncThunk('orders/fetchList', 
 fetchOrderService
)


const ordersSlice = createSlice({
    name:'orders/list',
    initialState:{
        data:[],
        status:'idle'
    },
    extraReducers:{
        [fetchOrders.pending]:(state)=>{
            state.status='pending';
        },
        [fetchOrders.rejected]:(state)=>{
            state.status='rejected';
        },
        [fetchOrders.fulfilled]:(state,action)=>{
            state.status='success';
            state.data = action.payload
        },
    }
})

export default ordersSlice.reducer