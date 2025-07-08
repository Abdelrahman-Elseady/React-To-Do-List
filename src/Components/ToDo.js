import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import "../ToDo.css";

export default function ToDo({ ToDo, HandleCheck }) {
  function HandleCheckClick() {
    HandleCheck(ToDo.id);
  }
  return (
    <Card
      className="toDoCard"
      sx={{ minWidth: 275, backgroundColor: "#f0f0f0", textAlign: "center" }}
    >
      <CardContent sx={{ textAlign: "left" }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Typography variant="h5">{ToDo.title}</Typography>
            <Typography variant="h6">{ToDo.details}</Typography>
          </Grid>
          <Grid
            size={4}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <IconButton
              onClick={HandleCheckClick}
              className="iconButton"
              style={{
                backgroundColor: ToDo.isCompleted ? "green" : "white",
                Color: ToDo.isCompleted ? "white" : "green",
                border: "solid 3px green",
              }}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              className="iconButton"
              style={{
                color: "grey",
                backgroundColor: "white",
                border: "solid 3px grey",
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              className="iconButton"
              style={{
                color: "red",
                backgroundColor: "white",
                border: "solid 3px red",
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
