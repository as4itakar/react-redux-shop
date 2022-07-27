import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:{
        product: [],
        isFetching: false,
        error: false,
    },

    reducers:{
        loadingStarts:(state)=>{
            state.isFetching = true
        },
        loadingSuccess:(state, action)=>{
            state.product = action.payload
            state.isFetching = false
        },
        loadingFailure:(state)=>{
            state.error = true
        },
        deleteStarts:(state)=>{
            state.isFetching = true
        },
        deleteSuccess:(state,action)=>{
            state.isFetching = false
            state.product.splice(
                state.product.findIndex((item)=>item._id === action.payload),
                1
            )
        },
        deleteFailure:(state)=>{
            state.error = true
        },
        updateStart:(state)=>{
            state.isFetching = true
        },
        updateSuccess:(state, action)=>{
            state.isFetching = false
            state.product[state.product.findIndex((item)=> item._id === action.payload.id)] = action.payload.product
        },
        updateFailure:(state)=>{
            state.error = true
        },
        addStart:(state)=>{
            state.isFetching = true
        },
        addSuccess:(state, action)=>{
            state.isFetching = false
            state.product.push(action.payload)
        },
        addFailure:(state)=>{
            state.error = true
        },
        deleteAll:(state)=>{
            state.product = []
        }

    }
})

export const {deleteAll, addStart, addSuccess, addFailure, updateStart, updateSuccess, updateFailure, loadingStarts, loadingSuccess, loadingFailure, deleteStarts, deleteSuccess, deleteFailure} = productSlice.actions
export default productSlice.reducer