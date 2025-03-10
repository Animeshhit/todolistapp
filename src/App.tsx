import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme/Theme";
import { GlobalStyles } from "./lib/theme/GlobalStyles";
import { useAppSelector } from "./redux/hooks/UseTheme";
import Home from "./pages/Home/Home";

function App() {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
