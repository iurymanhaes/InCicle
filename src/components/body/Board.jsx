import { Public } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import boardJSON from "../../assets/data/management.json";
import { IconButtonRef } from "../ButtonRef";
import { Warning } from "../Warning";

const Board = () => {
  const style = {
    backgroundColor: "#FFFFFF",
    width: "16px",
    height: "16px",
  };
  const [active, setActive] = useState(-1);
  const [render, setRender] = useState(false);

  const componentRef = useRef();
  let boards = boardJSON.data[0].boards;
  const handleClick = (el, i) => {
    if (el.title === boards[i].title) {
      boards.splice(boards[i], 1);
      setActive(-1);
      setRender(true);
    }
  };

  useEffect(() => {
    if (render) {
      setRender(false);
    }
  }, [render]);
  
  return (
    <>
    
      {boards.length > 0 ? (
        boards.map((el, i) => {
          return (
            <Box
              key={i}
              sx={{
                backgroundColor: "rgba(52,137,177,0.1)",
                marginTop: "11px",
                padding: "1px 5px 5px 5px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "15px",
                  }}
                >
                  {el.title}
                </Typography>
                <Box sx={{ display: "flex", gap: "3px", alignItems: "center" }}>
                  <IconButton
                    sx={{
                      backgroundColor: "#FFFFFF",
                      width: "15px",
                      height: "15px",
                    }}
                  >
                    <Public sx={{ fontSize: "15px", color: "#999999" }} />
                  </IconButton>

                  <IconButtonRef
                    style={style}
                    ref={componentRef}
                    key={i.toString()}
                    i={i}
                    active={active}
                    onEvent={(index) => setActive(index)}
                  />
                  {active === i ? (
                    <Box sx={{ position: "absolute", top: "20%", right: "5%" }}>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          height: "20px",
                          fontSize: "13px",
                          backgroundColor: "#3489B1",
                        }}
                        onClick={() => handleClick(el, i)}
                      >
                        Excluir item
                      </Button>
                    </Box>
                  ) : null}
                 
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {el.resume_files.map((rf, i) => (
                  <Box
                    key={i}
                    sx={{
                      backgroundImage: `url(${rf.file})`,
                      width: "60px",
                      height: "60px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      marginTop: "5px",
                      padding: "1px",
                    }}
                  />
                ))}
              </Box>
            </Box>
          );
        })
      ) : (
        <Warning
          color="#c0edec89"
          iconSize={"80px"}
          text={{
            fontSize: "20px",
            textAlign: "center",
            lineHeight: "1",
            marginBottom: "10px",
          }}
        />
      )}
    </>
  );
};

export { Board };
