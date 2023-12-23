import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers : {
        add(state , action){
            state.push(action.payload);
        },
        remove(state , action){
          return state.filter((item)=> item.id !== action.payload );
        },
        edit(state, action) {
          const { id, updatedProduct } = action.payload;
          const existingProduct = state.find((product) => product.id === id);
    
          if (existingProduct) {
            Object.assign(existingProduct, updatedProduct);
          }
        },
    }

})
export const {add , remove, edit} = productSlice.actions;
export const productReducer = productSlice.reducer;