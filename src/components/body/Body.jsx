import React, {useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  OutlinedInput,
  Grid,
  Box,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { EventCard } from "./EventCard";
import { Board } from "./Board";

const Body = () => {
  const [select, setSelect] = useState([]);
  const handleSelect = (e) => {
    setSelect(
      typeof e.target.value === "string"
        ? e.target.value.split(",")
        : e.target.value
    );
  }

  
  return (
      <Box
        sx={{
          padding: "0 70px",          
          "@media screen and (max-width: 1100px)": {
            padding: "10px",
          },
        }}
      >
        <Grid container spacing="31px" sx={{ marginTop: "55px" }}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100% !important",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#707070",
                  fontSize: "35px",
                  fontWeight: "300",
                  "@media screen and (max-width: 500px)": {
                    fontSize: "25px",
                  },
                }}
              >
                Endomarketing
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "flex-end",
                }}
              >
                <FormControl
                  sx={{
                    minWidth: "94px",
                    "& label": {
                      top: "-7px",
                    },
                  }}
                >
                  <InputLabel id="tipo">Tipo</InputLabel>
                  <Select
                    id="tipo"
                    multiple
                    value={select}
                    onChange={handleSelect}
                    size="small"
                    sx={{ backgroundColor: "#FFF","@media screen and (max-width: 500px)": {
                      fontSize: "13px",
                    }, }}
                    input={
                      <OutlinedInput
                        label="TIPO"
                        sx={{
                          height: "38px",
                        }}
                      />
                    }
                    renderValue={(selected) => {
                      return selected
                        .map((value) => {
                          switch (value) {
                            case "event":
                              value = "Evento";
                              break;
                            case "release":
                              value = "Comunicado";
                              break;
                            case "publication":
                              value = "Publicação";
                              break;
                          }
                          return value;
                        })
                        .join(", ");
                    }}
                  >
                    <MenuItem value="release">
                      <Checkbox checked={select.indexOf("release") > -1} />
                      <ListItemText primary="Comunicado" />
                    </MenuItem>
                    <MenuItem value="event">
                      <Checkbox checked={select.indexOf("event") > -1} />
                      <ListItemText primary="Evento" />
                    </MenuItem>
                    <MenuItem value="publication">
                      <Checkbox checked={select.indexOf("publication") > -1} />
                      <ListItemText primary="Publicação" />
                    </MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  endIcon={<AddIcon fontSize="8px" />}
                  sx={{
                    width: "103px",
                    backgroundColor: "#3489B1",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    height: "38px",
                    "@media screen and (max-width: 900px)": {
                      display: "none",
                    },
                  }}
                >
                  Criar
                </Button>
              </Box>
            </Box>

            {/**Card */}
            <EventCard response={select} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            <Box
              sx={{
                border: "1px solid #DCD1C0",
                backgroundColor: "#FFF2DE",
                padding: "30px 21px",
                maxWidth: "278px",
                "@media screen and (max-width: 899px)": {
                  maxWidth: "100%",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#707070",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "19px",
                  marginBottom: "22px",
                  "@media screen and (max-width: 500px)": {
                    fontSize: "15px",
                  },
                }}
              >
                Endormarketing
              </Typography>

              <Typography
                sx={{
                  fontWeight: "300",
                  fontSize: "14px",
                  lineHeight: "19px",
                  color: "#707070",
                  marginBottom: "30px",
                  textAlign: "left",
                }}
              >
                Endomarketing está relacionado às ações de treinamento ou
                qualificação dos colaboradores da empresa visando um melhor
                serviço para o cliente. Marketing interno, devido ao nome, é
                usualmente confundido com Endomarketing mesmo sendo conceitos
                diferentes.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#707070",
                  color: "#707070",
                  "&:hover": {
                    borderColor: "#707070",
                  },
                }}
              >
                DISPENSAR
              </Button>
            </Box>

            <Box
              className="shadow"
              sx={{
                backgroundColor: "#FDFDFD",
                marginTop: "17px",
                padding: "12px 8px 8px 8px",
                borderRadius: "6px",
                maxWidth: "305px",
                "@media screen and (max-width: 899px)": {
                  maxWidth: "100%",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "19px",
                  color: "#707070",
                }}
              >
                Quadros de Gestão à Vista
              </Typography>
              <Board />
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
};

export { Body };
