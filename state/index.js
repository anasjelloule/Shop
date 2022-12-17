import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  sites: {
    pages: [
      {
        id: 1,
        title: "Home",
        slug: "",
        description:"It's Home"
      },
      {
        id: 2,
        title: "About",
        slug: "About",
        description:"It's About",
        hassub:1
      },
      {
        id: 3,
        title: "Contact",
        slug: "Contact",
        description:"It's Not Found"
      },
      {
        id: 5,
        title: "Products",
        slug: "Products",
        description:"Page Products"
      },
      {
        id: 4,
        title: "Not Found",
        slug: "404",
        description:"It's Not Found"
      },
    ],
  },
};

const sitesSlice = createSlice({
  name: "Sites",
  initialState,
  reducers: {
    slug: {
      reducer(state, action) {
        state.sites;
      },
    },
  },
});
const store = configureStore({ reducer: { Sites: sitesSlice.reducer } });
export const { increment } = sitesSlice.actions;
export const getsites = (state) => state;
export default store;
