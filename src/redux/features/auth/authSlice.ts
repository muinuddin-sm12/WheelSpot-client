import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type TAuthUser = {
  name: string;
  email: string;
  password: string;
};
type TAuth = {
  user: null | TAuthUser;
  token: null | string;
};
const initialState: TAuth = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});
export const { setUser, logout } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
