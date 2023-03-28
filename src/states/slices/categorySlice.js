import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoryService } from "../../api/services/category";

export const fetchCategory = createAsyncThunk('Category/fetchList', 
    fetchCategoryService
)


const categorySlice = createSlice({
    name:'Category/list',
    initialState:{
        data:[],
        status:'idle'
    },
    extraReducers:{
        [fetchCategory.pending]:(state)=>{
            state.status='pending';
        },
        [fetchCategory.rejected]:(state)=>{
            state.status='rejected';
        },
        [fetchCategory.fulfilled]:(state,action)=>{
            state.status='success';
            state.data = action.payload
        },
    }
})

export default categorySlice.reducer