import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Input from "@mui/material/Input";
////////////// css
import styles from "./addjourney.module.css";
////////////// redux
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { increment, decrement } from "../../redux/slices/counter";
import { toggleAddJourneydialog } from "../../redux/slices/addJourneydialog";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

export default function CustomizedDialogs({ JourneyList, setJourneyList }) {
  const journeyDialog = useAppSelector(state => state.journeyDialog);
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {};
  const handleClose = () => {
    dispatch(toggleAddJourneydialog());
  };

  const [Name, setName] = React.useState("");
  const [CityFrom, setCityFrom] = React.useState("");
  const [CityTo, setCityTo] = React.useState("");
  // const [JourneyList, setJourneyList] = React.useState([]);
  // { sn: 1, name: "devendra", cityFrom: "chhindwara", cityTo: "bhopal" }

  const addJourney = e => {
    e.preventDefault();
    setJourneyList([
      {
        sn: JourneyList.length + 1,
        name: Name,
        cityFrom: CityFrom,
        cityTo: CityTo
      },
      ...JourneyList
    ]);
    setName("");
    setCityFrom("");
    setCityTo("");
    handleClose();
  };
  // console.log(JourneyList);

  return (
    <div className={styles.add_journey}>
      <div
        onClose={handleClose}
        // aria-labelledby="customized-dialog-title"
        open={journeyDialog}
        className={styles.the_dialog+ " " + (!journeyDialog ? " hide-the-dialog" : " ")}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={e => addJourney(e)} className={styles.journey_form}>
          <DialogContent dividers className={styles.user_inputs}>
            <Input
              required
              value={Name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name"
              inputProps={{ "aria-label": "description" }}
            />
            from:
            <Input
              required
              placeholder="City from"
              onChange={e => setCityFrom(e.target.value)}
              value={CityFrom}
            />
            to:
            <Input
              required
              placeholder="City upto"
              onChange={e => setCityTo(e.target.value)}
              value={CityTo}
            />
            <Fab type="submit" variant="extended" size="medium" color="primary">
              <NavigationIcon sx={{ mr: 1 }} />
              Add Journey
            </Fab>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
            <Button autoFocus onClick={handleClose}>
              Cancle
            </Button>
          </DialogActions>
        </form>
      </div>
    </div>
    // <div>
    //   add asdfa
    // </div>
  );
}
