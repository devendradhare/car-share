// components
import AppStructure from "./components/AppStructure";

// MUI components
import { ThemeProvider, createTheme } from "@mui/material/styles";

// mui functions
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // mode: "light"
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppStructure />
    </ThemeProvider>
  );
}

export default App;
