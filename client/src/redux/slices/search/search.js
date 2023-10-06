import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearch: (state, p) => (state = p.payload)
  }
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
