import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/index";
import addJourneyDialogSlice from "./slices/addJourneydialog/index";

export default configureStore({
  reducer: {
    counter: counterSlice,
    journeyDialog: addJourneyDialogSlice,
  }
});
    