import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
// import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function SuccessAlert({open, setOpen}) {
  // const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      console.log("open", open);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [open,setOpen]);
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Added Successfuly
        </Alert>
      </Collapse>
    </Box>
  );
}
