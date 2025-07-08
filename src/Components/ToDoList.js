import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToDo from "./ToDo";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { v4 as uuid } from "uuid";

import { useState } from "react";

const intialToDos = [
  { id: uuid(), title: "Learn React", details: "fdasf", isCompleted: false },
  { id: uuid(), title: "Learn Redux", details: "fdasf", isCompleted: false },
];

export default function ToDoList() {
  const [ToDos, setToDos] = useState(intialToDos);
  const [InputValue, setInput] = useState("");
  const ToDoList = ToDos.map((t) => {
    return <ToDo key={t.id} title={t.title} details={t.details} />;
  });

  function HandleButtonClick() {
    const AddedTodo = {
      id: uuid(),
      title: InputValue,
      details: "",
      isCompleted: false,
    };
    setToDos([...ToDos, AddedTodo]);
    setInput("");
  }

  return (
    <Container
      maxWidth="sm"
      style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
    >
      <Card sx={{ minWidth: 275, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" style={{ fontWeight: 900, fontSize: 50 }}>
            To Do List
          </Typography>
          <Divider />
          {/* {Filter buttons} */}
          <ToggleButtonGroup
            exclusive
            aria-label="text alignment"
            style={{ margin: "20px 0" }}
          >
            <ToggleButton value="left" aria-label="left aligned">
              All
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              Finnished
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              Not Finished
            </ToggleButton>
          </ToggleButtonGroup>
          {/* {close buttons} */}

          {/* {to dos} */}
          {ToDoList}
          {/* close to dos */}

          {/* Add To do  */}
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid
              size={8}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TextField
                id="outlined-basic"
                label="Task Input"
                variant="outlined"
                value={InputValue}
                fullWidth
                onChange={(event) => {
                  setInput(event.target.value);
                }}
              />
            </Grid>
            <Grid
              size={4}
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Button
                variant="contained"
                fullWidth
                style={{ padding: 15 }}
                onClick={HandleButtonClick}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          {/* close Add To do */}
        </CardContent>
      </Card>
    </Container>
  );
}
