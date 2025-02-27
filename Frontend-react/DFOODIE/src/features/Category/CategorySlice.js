import { createSlice } from "@reduxjs/toolkit";


const CategorySlice=createSlice({
    name:"category",
    initialState:{value:"All"},
    reducers:{
        Categorychange:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const {Categorychange}=CategorySlice.actions;

export default CategorySlice.reducer;