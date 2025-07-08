import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./Components/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Oswald",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
