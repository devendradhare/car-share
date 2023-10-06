// MUI imports
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
////////////// my imports
import JourneyItem from "../journeyItem/JourneyItem";
import AddJourney from "./AddJourney";
////////////// redux
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { toggleAddJourneydialog } from "../../redux/slices/addJourneydialog";
import { notificationMarkAsRead } from "../../redux/slices/notifications/notification";
import { mailMarkAsRead } from "../../redux/slices/mails/mail";
import { increment, decrement } from "../../redux/slices/counter"; ////////////// will be removed
import Button from "@mui/material/Button";

////////////// MUI functions components
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index &&
        <Box sx={{ p: 3 }}>
          {children}
        </Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`
  };
}

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16
};

const fabGreenStyle = {
  color: "common.white",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[600]
  }
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // my hooks
  const [JourneyList, setJourneyList] = React.useState([]);
  // {   sn: 1,   name: "devendra",   cityFrom: "chhindwara",   cityTo: "bhopal" }

  // redux
  const dispatch = useAppDispatch();
  const count = useAppSelector(s => s.counter);
  const notification = useAppSelector(state => state.notifications);
  const mail = useAppSelector(state => state.mail);
  const search = useAppSelector(state => state.search);

  // my functions
  const addCar = React.useCallback(journeyInfo => {
    console.log(journeyInfo);
    return <JourneyItem key={journeyInfo.sn} journeyInfo={journeyInfo} />;
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleNotificationMarkAsRead = () => {
    dispatch(notificationMarkAsRead())
  }

  const handleMailMarkAsRead = () => {
    dispatch(mailMarkAsRead())
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const fabs = [
    {
      color: "primary",
      sx: fabStyle,
      icon: <AddIcon />,
      label: "Add",
      onClick: () => {
        console.log("button clicked");
        dispatch(toggleAddJourneydialog());
      }
    },
    {
      color: "secondary",
      sx: fabStyle,
      icon: <EditIcon />,
      label: "Edit",
      onClick: () => {
        console.log("button clicked");
        dispatch(increment());
      }
    },
    {
      color: "inherit",
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: "Expand"
    }
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        height: "100%",
        position: "relative",
        minHeight: 200
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Travelers" {...a11yProps(0)} />
          <Tab label="My List" {...a11yProps(1)} />
          <Tab label="Other" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {JourneyList.map(addCar)}
          <AddJourney
            JourneyList={JourneyList}
            setJourneyList={setJourneyList}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h1>
            Coutn is {count}
          </h1>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <h3>
            notification : {notification}{" "}
            <Button
              onClick={() => handleNotificationMarkAsRead()}
              variant="outlined"
              size="small"
              color="primary"
            >
              mark as raed
            </Button>
          </h3>
          <h3>
            mail: {mail}{" "}
            <Button
              onClick={() => handleMailMarkAsRead()}
              variant="outlined"
              size="small"
              color="primary"
            >
              mark as raed
            </Button>
          </h3>
          <h3>search: {search}</h3>
          <h3>menu click: in production</h3>
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) =>
        <Zoom
          onClick={fab.onClick}
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index
              ? transitionDuration.exit
              : 0}ms`,
            position: "fixed",
            right: "20px"
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      )}
    </Box>
  );
}
