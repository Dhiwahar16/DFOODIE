//Slice to add remove items in cart and to change count

import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{value: {}},
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload;
            if(state.value[item.id]){
                state.value[item.id].count+=1;
            }
            else{
                state.value[item.id]={...item,count:1};
            }
        },
        removeFromCart:(state,action)=>{
            const id=action.payload;
            if(state.value[id]?.count>1){
                state.value[id].count-=1;
            }
            else{
                delete state.value[id];
            }
        },
        removeitem:(state,action)=>{
            const id=action.payload;
            delete state.value[id];
        }
    }
})

export const {addToCart,removeFromCart,removeitem}=CartSlice.actions;

export default CartSlice.reducer;   