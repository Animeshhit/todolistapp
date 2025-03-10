import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import notesReducer from "./slices/notesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
