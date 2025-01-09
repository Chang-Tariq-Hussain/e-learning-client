import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  token: "",
  roll: null,
  isLogin: false,
  permissions: null,
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      state.isGuest = false
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
   
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRoll: (state, action) => {
      state.roll = action.payload;
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload;
    },
    reset: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLogin = initialState.isLogin;
      state.roll = initialState.roll;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLogin, reset, setUser, setToken, setRoll, setSignupRole, setGuestUser, setBrandProfile, setPermissions } =
    authSlice.actions;

export default authSlice.reducer;