import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import blogsSlice from "./blogs-slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    blogs: blogsSlice.reducer,
  },
});

export default store;
