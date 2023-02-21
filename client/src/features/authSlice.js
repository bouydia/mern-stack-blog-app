import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login(state, action) {
          state.user = action.payload
          console.log('from authSlie',state.user);
    },
  },
})


const authReducer = authSlice.reducer
const authActions = authSlice.actions


export {authActions,authReducer}