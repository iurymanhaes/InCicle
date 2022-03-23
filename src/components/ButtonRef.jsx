import { IconButton } from "@mui/material";
import { forwardRef, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const IconButtonRef = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  return (
    <IconButton
      ref={ref}
      onClick={() => {
        props.onEvent(props.i);
        if (props.active === props.i && !open) {
          props.onEvent(-1);
        }
      }}
      sx={props.style}
    >
      <MoreHorizIcon sx={{width:props.style.width, height:props.style.height}} />
    </IconButton>
  );
});

export { IconButtonRef };
