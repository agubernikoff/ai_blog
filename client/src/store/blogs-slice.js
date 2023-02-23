import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: { blogs: [] },
  reducers: {
    setBlogs(state, action) {
      state.blogs = action.payload;
    },
    updateBlogs(state, action) {
      const newBlog = action.payload;
      console.log(newBlog);
      const updatedBlogs = [newBlog, ...state.blogs];
      state.blogs = updatedBlogs;
    },

    deleteBlog(state, action) {
      const filtered = state.blogs.filter((p) => p.id !== action.payload);
      state.blogs = filtered;
    },
  },
});

export const blogsActions = blogsSlice.actions;

export default blogsSlice;
