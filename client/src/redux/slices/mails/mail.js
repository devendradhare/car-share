import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: 1,
  reducers: {
    mailClick: state => state += 1,
    mailMarkAsRead: state => 0
  }
});

export const { mailClick, mailMarkAsRead } = mailSlice.actions;
export default mailSlice.reducer;
