import { useState, useCallback } from "react";
import "./appStructure.css";

// components
import JourneyCard from "./JourneyCard.jsx";
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
  const [JourneyList, setJourneyList] = useState(
    [
      // { sn: 1, name: "devendra", cityFrom: "chhindwara", cityTo: "bhopal" }
    ]
  );

  return (
    <div className="body">
      <Navbar />
      <div className="app-structure">
        <SuccessAlert open={open} setOpen={setOpen} />
        <TabPanel className="tab-panel" />
      </div>
    </div>
  );
}

export default App;

  // const addJourney = e => {
  //   e.preventDefault();
  //   setJourneyList([
  //     {
  //       sn: JourneyList.length + 1,
  //       name: Name,
  //       cityFrom: CityFrom,
  //       cityTo: CityTo
  //     },
  //     ...JourneyList
  //   ]);
  //   setName("");
  //   setCityFrom("");
  //   setCityTo("");
  //   setOpen(true);
  //   console.log("preventDefault");
  // };

  // const addCar = useCallback(journeyInfo => {
  //   console.log(journeyInfo);
  //   return <JourneyCard key={journeyInfo.sn} journeyInfo={journeyInfo} />;
  // }, []);

// {/* <h2>Car-share</h2> */}


// {/* <form onSubmit={e => addJourney(e)}>
//   <label>
//     Name:
//     <input
//       type="text"
//       placeholder="Your name"
//       onChange={e => setName(e.target.value)}
//       value={Name}
//       required
//     />
//   </label>
//   <label>I am going</label>
//   <label>
//     from:
//     <input
//       type="text"
//       placeholder="City name"
//       onChange={e => setCityFrom(e.target.value)}
//       value={CityFrom}
//     />
//   </label>
//   <label>
//     to:
//     <input
//       type="text"
//       placeholder="City name"
//       onChange={e => setCityTo(e.target.value)}
//       value={CityTo}
//       required
//     />
//   </label>
//   <Fab type="submit" variant="extended" size="medium" color="primary">
//     <NavigationIcon sx={{ mr: 1 }} />
//     Add Journey
//   </Fab>
// </form> */}

// {/* <TravelersList /> */}

// {/* <div className="list">
//   {JourneyList.map(addCar)}
// </div> */}
