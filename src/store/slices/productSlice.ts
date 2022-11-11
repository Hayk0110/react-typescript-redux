import { IProduct } from "../../models/product";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface ProductSlice{
    products: IProduct[],
    loading: boolean,
    error: string
}

const initialState:ProductSlice = {
    products: [],
    loading: false,
    error: ''
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetching(state){
            state.loading = true;
        },
        fetchingSuccess(state,action){
            state.error = '';
            state.loading = false;
            state.products = action.payload;
        },
        fetchingError(state,action: PayloadAction<Error>){
            state.loading = false;
            state.error = action.payload.message;
        }
    }
});

export default productSlice.reducer;