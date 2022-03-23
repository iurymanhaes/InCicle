import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import dataJSON from "../../assets/data/data.json";
import { ConfirmedModal } from "../ConfirmedModal";
import { IconButtonRef } from "../ButtonRef";
import { Warning } from "../Warning";
import { Close } from "@mui/icons-material";

const EventCard = (props) => {
  const [render, setRender] = useState(false);
  const [active, setActive] = useState(-1);
  const [open, setOpen] = useState(false);
  const componentRef = useRef();

  let data = dataJSON.data;

  const style = {
    position: "absolute",
    backgroundColor: "#DBDBDB",
    right: "11px",

    width: "24px",
    height: "24px",
    "@media screen and (max-width: 600px)": {
      top: "5px",
      right: "5px",
    },
  };

  const handleClick = (id, i) => {
    if (id === data[i].id) {
      data.splice(data[i], 1);
      setOpen(true);
      setActive(-1);
      setRender(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  useEffect(() => {
    if (render) {
      setRender(false);
    }
  }, [render]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Item excluído!
        </Alert>
      </Snackbar>
      <Grid>
        {data.length > 0 ? (
          data.map((el, i) => {
            let fill = [];
            if (props.response.length < 1) {
              fill = ["event", "release", "publication"];
            } else {
              fill = props.response;
            }
            if (fill.includes(el.type)) {
              return (
                <Grid
                  className="shadow"
                  item
                  xs={12}
                  key={el.id}
                  sx={{
                    height: "93px",
                    backgroundColor: "#FFF",
                    margin: "10px 0",
                    padding: "11px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    position: "relative",
                    "@media screen and (max-width: 600px)": {
                      gap: "5px",
                      padding: "5px",
                    },
                    "@media screen and (max-width: 1100px)": {
                      height: "auto",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "73px",
                      height: "73px",
                      backgroundImage: `url(${el.file.url})`,
                      backgroundSize: "cover",
                      flexShrink: 0,
                      backgroundPosition: "center",
                      "@media screen and (max-width: 400px)": {
                        display: "none",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      "@media screen and (max-width: 600px)": {
                        gap: "0px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#707070",
                        fontSize: "16px",
                        lineHeight: "19px",
                        fontWeight: "700",
                        "@media screen and (max-width: 600px)": {
                          fontSize: "13px",
                          maxWidth: "230px",
                          letterSpacing: "1px",
                        },
                      }}
                    >
                      {el.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "5px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          backgroundColor:
                            el.type === "event"
                              ? "#EE8686"
                              : el.type === "publication"
                              ? "#707070"
                              : "#3489B1",
                          padding: "6px",
                          fontWeight: "700",
                          fontSize: "12px",
                          lineHeight: "7px",
                          color: el.type == "event" ? "#333" : "#FFF",
                          "@media screen and (max-width: 500px)": {
                            fontSize: "10px",
                            padding: "3px",
                          },
                        }}
                      >
                        {el.type === "event"
                          ? "EVENTO"
                          : el.type === "publication"
                          ? "PUBLICAÇÃO"
                          : "COMUNICADO"}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontSize: "12px",
                          color: "#707070",
                          lineHeight: "12px",
                          display: "flex",
                          gap: "3px",
                          alignItems: "center",
                          flexWrap: "wrap",
                          "@media screen and (max-width: 600px)": {
                            fontSize: "10px",
                            wordBreak: "break",
                          },
                        }}
                      >
                        {el.info.place
                          ? `${el.info.place} | ${el.info.date}`
                          : el.info.date}
                        {el.type !== "event" ? null : (
                          <ConfirmedModal
                            key={el.id}
                            confirmed={el.invited_people}
                          />
                        )}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        lineHeight: "18px",
                        fontSize: "13px",
                        color: "#707070",
                        "@media screen and (max-width: 1000px)": {
                          maxWidth: "400px",
                        },
                      }}
                    >
                      {el.description}
                    </Typography>
                  </Box>
                  <IconButtonRef
                    style={style}
                    ref={componentRef}
                    key={i.toString()}
                    i={i}
                    active={active}
                    onEvent={(index) => setActive(index)}
                  />
                  {active === i ? (
                    <Box
                      sx={{ position: "absolute", right: "30px", top: "-10px" }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          height: "20px",
                          fontSize: "13px",
                          backgroundColor: "#3489B1",
                        }}
                        onClick={() => handleClick(el.id, i)}
                      >
                        Excluir item
                      </Button>
                    </Box>
                  ) : null}
                </Grid>
              );
            }
          })
        ) : (
          <Warning
            iconSize={"150px"}
            text={{
              fontSize: "40px",
              textAlign: "center",
              lineHeight: "1",
              marginBottom: "10px",
            }}
          />
        )}
      </Grid>
    </>
  );
};

export { EventCard };
