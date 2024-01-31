import { useState, useCallback } from "react";

// css?
import styles from "./appStructure.module.css";

// components
import JourneyCard from "./journeyCard/JourneyCard.jsx";
import SuccessAlert from "./SuccessAlert";
import Navbar from "./navbar/Navbar";

import TravelersList from "./travelers/TravelersList";
import TabPanel from "./tabPanel/TabPanel";

// mui components
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

function App() {
  const [open, setOpen] = useState(false);

  const [Name, setName] = useState("");
  const [CityFrom, setCityFrom] = useState("");
  const [CityTo, setCityTo] = useState("");
  const [JourneyList, setJourneyList] = useState([
    // { sn: 1, name: "devendra", cityFrom: "chhindwara", cityTo: "bhopal" }
  ]);

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.app_structure}>
        {/* <SuccessAlert open={open} setOpen={setOpen} /> */}
        <TabPanel className={styles.tab_panels} />  
      </div>
    </div>
  );
}

export default App;
