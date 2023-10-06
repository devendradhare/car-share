import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: 1,
  reducers: {
        notificationClick: (state) => state += 1,
        notificationMarkAsRead: (state) => 0
    }
  }
);

export const { notificationClick, notificationMarkAsRead } = notificationSlice.actions;

export default notificationSlice.reducer;
