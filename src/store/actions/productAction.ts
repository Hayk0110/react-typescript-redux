import { Dispatch } from "@reduxjs/toolkit";
import axios from "../../axios";
import {productSlice} from "../slices/productSlice";

export const fetchProduct = (_page=1,_limit=5)=>{
    return async (dispatch: Dispatch)=>{
        try {
            dispatch(productSlice.actions.fetching());
            const response = await axios.get('products',{
                params:{
                    _page,
                    _limit
                }
            });

            console.log(response.data);

            dispatch(productSlice.actions.fetchingSuccess(response.data));
            
        } catch (error) {
            dispatch(productSlice.actions.fetchingError(error as Error))
        }
    }
}