import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchColorsService } from "../../api/services/colors";

export const fetchColors = createAsyncThunk('colors/fetchList', 
fetchColorsService
)


const colorsSlice = createSlice({
    name:'colors/list',
    initialState:{
        data:[],
        status:'idle'
    },
    extraReducers:{
        [fetchColors.pending]:(state)=>{
            state.status='pending';
        },
        [fetchColors.rejected]:(state)=>{
            state.status='rejected';
        },
        [fetchColors.fulfilled]:(state,action)=>{
            state.status='success';
            state.data = action.payload
        },
    }
})

export default colorsSlice.reducer