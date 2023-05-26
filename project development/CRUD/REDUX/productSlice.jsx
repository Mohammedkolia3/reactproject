import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('api/getProduct' ,async ()=>{
try {
   const response = await axios.get('https://fakestoreapi.com/products')
   return response.data
} catch (error) {
}
})

const initialState={
    loading: true,
    products:[],
    carts:[]
}


const productSlice = createSlice({
    name : 'productPrice',
    initialState,
    reducers :{
addToCart:(state,action)=>{
    state.carts = [...state.carts, action.payload]
}
    },
    extraReducers:{
        [getProducts.pending]:(state, action)=>{
            state.loading = true
        },
        [getProducts.fulfilled]:(state, action)=>{
            state.loading = false;
            state.products = action.payload
        },
        [getProducts.rejected]:(state, action)=>{
            state.loading = false
        }
    }

}) 
export const {addToCart} = productSlice.actions
export default productSlice.reducer