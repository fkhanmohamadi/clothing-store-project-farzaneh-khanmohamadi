import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSubcategoryService } from "../../api/services/subcategory";

export const fetchSubcategory = createAsyncThunk('Subcategory/fetchList', 
    fetchSubcategoryService
)


const subcategorySlice = createSlice({
    name:'Subcategory/list',
    initialState:{
        data:[],
        status:'idle'
    },
    extraReducers:{
        [fetchSubcategory.pending]:(state)=>{
            state.status='pending';
        },
        [fetchSubcategory.rejected]:(state)=>{
            state.status='rejected';
        },
        [fetchSubcategory.fulfilled]:(state,action)=>{
            state.status='success';
            state.data = action.payload
        },
    }
})

export default subcategorySlice.reducer