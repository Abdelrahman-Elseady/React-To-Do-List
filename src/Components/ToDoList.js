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
export default function ToDoList() {
  return (
    <Container
      maxWidth="sm"
      style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
    >
      <Card sx={{ minWidth: 275, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5">ToDoList</Typography>
          <Divider />
          {/* {buttons} */}
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
          <ToDo />
        </CardContent>
      </Card>
    </Container>
  );
}
