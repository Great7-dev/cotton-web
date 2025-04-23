"use client";
import { configureStore } from "@reduxjs/toolkit";

import serviceSlice from "./Slices/serviceSlice";
import blogSlice from "./Slices/blogSlice";

export const store = configureStore({
  reducer: {
    service: serviceSlice,
    blog: blogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
