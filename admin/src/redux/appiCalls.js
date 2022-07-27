import {loginFailure, loginStart, loginSuccess} from "./userSlice";
import {
    deleteAll,
    loadingStarts,
    loadingSuccess,
    loadingFailure,
    deleteStarts,
    deleteSuccess,
    deleteFailure,
    addStart,
    addSuccess,
    addFailure,
    updateStart,
    updateSuccess, updateFailure
} from "./productSlice";
import { publicRequest, adminRequest} from "../requestMethods";

export const login = async (dispatch, user) =>{
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("auth/log",user)
        dispatch(loginSuccess(res.data))
    }catch (e) {
        dispatch(loginFailure())
    }
}

export const getProduct = async (dispatch) =>{
    dispatch(loadingStarts())
    try {
        const res = await publicRequest.get("products/find")
        dispatch(loadingSuccess(res.data))
    }catch (e) {
        dispatch(loadingFailure())
    }
}

export const deleteProduct = async (id, dispatch) =>{
    dispatch(deleteStarts())
    try {
        const res = await adminRequest.delete("products/"+id)
        dispatch(deleteSuccess(id))
    }catch (e) {
        dispatch(deleteFailure())
    }
}

export const addProductOne = async (product, dispatch) =>{
    dispatch(addStart())
    try {
        const res = await adminRequest.post("products",product)
        dispatch(addSuccess(res.data))
    }catch (e) {
        dispatch(addFailure())
    }
}

export const updateProduct = async (id, product, dispatch) =>{
    dispatch(updateStart())
    try {
        const res = await adminRequest.put("products/"+id, product)
        dispatch(updateSuccess({id: res.data._id, product: res.data}))
    }catch (e) {
        dispatch(updateFailure())
    }
}

export const deleteAnything = async (dispatch) =>{
    try {
        dispatch(deleteAll())
    }catch{}
}

