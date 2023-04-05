import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBrandsService } from "../../api/services/brands";

export const fetchBrands = createAsyncThunk('Brands/fetchList', 
fetchBrandsService
)


const brandsSlice = createSlice({
    name:'Brands/list',
    initialState:{
        data:[],
        status:'idle'
    },
    extraReducers:{
        [fetchBrands.pending]:(state)=>{
            state.status='pending';
        },
        [fetchBrands.rejected]:(state)=>{
            state.status='rejected';
        },
        [fetchBrands.fulfilled]:(state,action)=>{
            state.status='success';
            state.data = action.payload
        },
    }
})

export default brandsSlice.reducer