import { ErrorOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const Warning = (props) => {
  return (
    <Grid
      className="shadow"
      item
      xs={12}
      sx={{
        backgroundColor: props.color ? props.color : "#FFF",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "20px",
        borderRadius: "4px",
      }}
    >
      <ErrorOutline
        sx={{
          fontSize: props.iconSize,
          color: "#3489B1",
        }}
      />
      <Typography sx={props.text}>
        Oops,
        <br />
        Lista vazia
      </Typography>
    </Grid>
  );
};

export { Warning };
