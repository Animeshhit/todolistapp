import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
}

const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  if (storedTheme) return storedTheme;
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  return prefersDarkMode ? "dark" : "light";
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme); // Persist to localStorage
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme); // Persist to localStorage
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, setTheme } = themeSlice.actions;
