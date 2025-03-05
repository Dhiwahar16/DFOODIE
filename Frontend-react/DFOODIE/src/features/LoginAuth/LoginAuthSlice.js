import { createSlice } from "@reduxjs/toolkit";

const LoginAuthSlice = createSlice({
    name: "loginauth",
    initialState: { value: false }, 
    reducers: {
        loginAuth: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { loginAuth } = LoginAuthSlice.actions;
export default LoginAuthSlice.reducer;
