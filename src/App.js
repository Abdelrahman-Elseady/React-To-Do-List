import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./Components/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToDosContext } from "./Contexts/ToDosContext";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Oswald",
  },
});

const intialToDos = [
  { id: uuid(), title: "Learn React", details: "fdasf", isCompleted: false },
  { id: uuid(), title: "Learn Redux", details: "fdasf", isCompleted: false },
];

function App() {
  const [ToDos, setToDos] = useState(intialToDos);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ToDosContext.Provider value={{ ToDos, setToDos }}>
          {/* <ToDoList /> */}
          <ToDoList />
        </ToDosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
