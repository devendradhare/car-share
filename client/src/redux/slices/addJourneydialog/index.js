import { createSlice } from "@reduxjs/toolkit";

export const addJourneyDialogSlice = createSlice({
  name: "addJourneydialog",
  initialState: false,
  reducers: {
        toggleAddJourneydialog: (state) => !state,
    }
  }
);

export const { toggleAddJourneydialog } = addJourneyDialogSlice.actions;

export default addJourneyDialogSlice.reducer;
