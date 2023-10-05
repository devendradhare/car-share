import { createSlice } from "@reduxjs/toolkit";

export const addJourneyDialogSlice = createSlice({
  name: "addJourneydialog",
  initialState: false,
  reducers: {
        openAddJourneydialog: (state) => true,
        closeAddJourneydialog: (state) => false,
    }
  }
);

export const { openAddJourneydialog, closeAddJourneydialog } = addJourneyDialogSlice.actions;

export default addJourneyDialogSlice.reducer;
