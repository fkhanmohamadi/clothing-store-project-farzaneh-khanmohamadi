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

// const productsSlice = createSlice({
//   name: 'products/list',
//   initialState: {
//     list: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchproducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchproducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.list = action.payload;
//       })
//       .addCase(fetchproducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error?.message || 'خطا در دریافت محصولات';
//       });
//   },
// });
