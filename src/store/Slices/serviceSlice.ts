"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServiceState {
  showOrderDetails: boolean;
  serviceOrderPayload: Record<string, string>;
}

const initialState: ServiceState = {
  showOrderDetails: false,
  serviceOrderPayload: {},
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setShowOrderDetails: (state, action: PayloadAction<boolean>) => {
      state.showOrderDetails = action.payload;
    },
    setServiceOrderPayload: (
      state,
      action: PayloadAction<Record<string, string>>,
    ) => {
      state.serviceOrderPayload = action.payload;
    },
  },
});

export const { setShowOrderDetails, setServiceOrderPayload } =
  serviceSlice.actions;
export default serviceSlice.reducer;
