import { createSlice } from "@reduxjs/toolkit";

const MenuSlice=createSlice({
    name:"menu",
    initialState: { value:"home" },
    reducers:{
        MenuBar:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const {MenuBar}=MenuSlice.actions;

export default MenuSlice.reducer;