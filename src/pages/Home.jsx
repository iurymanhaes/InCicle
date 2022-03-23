import { Add } from "@mui/icons-material";
import { AppBar, Box, IconButton } from "@mui/material";
import { LogoSVG } from "../Logo";
import { Body } from "../components/body/Body";

const Home = () => {
  return (
    <>
      <AppBar
        sx={{
          height: "55px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginLeft: "41px",
            "@media screen and (max-width: 900px)": {
              marginLeft: "8px",
            },
          }}
        >
          <LogoSVG style={{ height: "36.28px", width: "145.81px" }} />
        </Box>
        <IconButton
          sx={{
            display: "none",
            color: "#3489B1",
            "@media screen and (max-width: 900px)": {
              display: "block",
            },
          }}
        >
          <Add fontSize="8px" />
        </IconButton>
      </AppBar>
      <Body />
    </>
  );
};

export { Home };
