import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  password: string;
}

interface AuthType {
  auth: boolean;
  user: User | null;
}

const getInitialUser = (): User | null => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) return JSON.parse(storedUser) as User;
  return null;
};

const initialState: AuthType = {
  auth: getInitialUser() ? true : false,
  user: getInitialUser(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      const existingUser = localStorage.getItem("user");

      if (!existingUser) {
        state.auth = false;
        state.user = null;
        return;
      }

      const user: User = JSON.parse(existingUser);

      if (
        user.username !== action.payload.username ||
        user.password !== action.payload.password
      ) {
        state.auth = false;
        state.user = null;
        return;
      }

      state.auth = true;
      state.user = user;
    },

    register: (state, action: PayloadAction<User>) => {
      const existingUser = localStorage.getItem("user");

      if (existingUser) {
        const parsedUser = JSON.parse(existingUser) as User;

        // Prevent duplicate registration
        if (parsedUser.username === action.payload.username) {
          alert("User already exists!");
          return;
        }
      }

      localStorage.setItem("user", JSON.stringify(action.payload));
      state.auth = true;
      state.user = action.payload;
    },

    logout: (state) => {
      localStorage.removeItem("user");
      state.auth = false;
      state.user = null;
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
