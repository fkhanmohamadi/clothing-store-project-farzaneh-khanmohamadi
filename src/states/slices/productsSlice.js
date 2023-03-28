import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductService } from "../../api/services/Products";

export const fetchproducts = createAsyncThunk('products/fetchList', 
 fetchProductService
)


const productsSlice = createSlice({
    name:'products/list',
    initialState:{
        data:[],
        status:'idle'
    },
    extraReducers:{
        [fetchproducts.pending]:(state)=>{
            state.status='pending';
        },
        [fetchproducts.rejected]:(state)=>{
            state.status='rejected';
        },
        [fetchproducts.fulfilled]:(state,action)=>{
            state.status='success';
            state.data = action.payload
        },
    }
})

export default productsSlice.reducer