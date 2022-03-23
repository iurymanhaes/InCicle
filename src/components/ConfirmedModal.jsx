import { useState } from "react";
import {
  Avatar,
  Backdrop,
  Box,
  Fade,
  IconButton,
  Link,
  Modal,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FEFEFE",
  boxShadow: 24,
  padding: "8px",
  borderRadius: "8px",
};

const ConfirmedModal = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let count = [];
  props.confirmed.map((cfmd, i) => {
    if(props.confirmed[i].confirmed_presence){
      count.push(props.confirmed[i].confirmed_presence)
    }
  });
  return (
    <>
      <span>|</span>
      <Link
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          fontSize: "9px",
          color: "#3489B1",
          textTransform: "uppercase",
          fontWeight: "300",
          lineHeight:"12px",
          "@media screen and (max-width: 500px)": {
            fontSize: "10px",
          },
        }}
      >
        {props.confirmed.length > 1
          ? `${count.length} confirmados de ${props.confirmed.length}`
          : `${count.length} confirmado de ${props.confirmed.length}`}
      </Link>

      <Modal
        closeAfterTransition
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open} sx={style}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <IconButton
                sx={{ color: "##F2F3F5", cursor: "pointer" }}
                onClick={handleClose}
              >
                <Close />
              </IconButton>
            </Box>

            {props.confirmed.map((cfmd, i) => (
              <Box
                key={i}
                sx={{
                  margin: "10px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "1px 3px 3px 1px #c3c3c3",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Avatar
                    src={cfmd.avatar}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "#333",
                      }}
                    >
                      {cfmd.name}
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "3px" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "700",
                          color: "#333",
                        }}
                      >
                        USUÁRIO:
                      </Typography>
                      <Typography
                        sx={{ fontStyle: "italic", color: "#03a1fc" }}
                      >
                        {cfmd.username}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        width: "auto",
                        borderRadius: "8px",
                        fontSize: "11px",
                        textAlign: "center",
                        color: "#FFF",
                        textTransform: "uppercase",
                        backgroundColor: !cfmd.confirmed_presence
                          ? "red"
                          : "green",
                      }}
                    >
                      {cfmd.confirmed_presence
                        ? "confirmado"
                        : "não confirmado"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export { ConfirmedModal };
