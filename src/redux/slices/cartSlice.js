import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        addToCart:(state,actionFromComponent)=>{
            const existingProduct= state.find(item=>item.id==actionFromComponent.payload.id)
            if (existingProduct) {
                
            } else {
                state.push({...actionFromComponent.payload,quantity:1,totalPrice:actionFromComponent.payload.price})
            }
        }
    }

})
export const {addToCart}=cartSlice.actions
export default cartSlice.reducer