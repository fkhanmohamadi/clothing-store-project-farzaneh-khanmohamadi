import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSizesService } from "../../api/services/sizes";

export const fetchSizes = createAsyncThunk('sizes/fetchList', 
fetchSizesService
)


const sizesSlice = createSlice({
    name:'Sizes/list',
    initialState:{
        data:[],
        status:'idle'
    },
    extraReducers:{
        [fetchSizes.pending]:(state)=>{
            state.status='pending';
        },
        [fetchSizes.rejected]:(state)=>{
            state.status='rejected';
        },
        [fetchSizes.fulfilled]:(state,action)=>{
            state.status='success';
            state.data = action.payload
        },
    }
})

export default sizesSlice.reducer