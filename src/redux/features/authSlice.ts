import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  token: "",
  role: null,
  isLogin: false,
  permissions: null,
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
   
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload;
    },
    reset: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLogin = initialState.isLogin;
      state.role = initialState.role;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLogin, reset, setUser, setToken, setRole, setPermissions } =
    authSlice.actions;

export default authSlice.reducer;