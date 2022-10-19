import { createSlice } from "@reduxjs/toolkit";

interface TokenState{
    refreshToken: string | null,
    accessToken: string| null,
    message: string,
}

const initialState: TokenState = {
    refreshToken: null,
    accessToken: null,
    message: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setCredentials(state, action){
            const {refreshToken, accessToken, message} = action.payload;
            state.refreshToken = refreshToken;
            state.accessToken = accessToken;
            state.message = message;
            console.log(refreshToken);
        },
        logOut(state){
            state.refreshToken = null;
            state.accessToken = null;
        }
    }
});

export default authSlice.reducer;
export const authAction = authSlice.actions;