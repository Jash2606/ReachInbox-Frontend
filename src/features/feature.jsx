import { createSlice } from "@reduxjs/toolkit";

export const featureUse = createSlice({
  name: "featureUse",
  initialState: {
    value: 0,
    darkView: 1,
    noOfMsg: 0,
    url: "/",
    dataList: [],
    threadId: -1,
    threadData: [],
    replyButton: 0,
    deletion: 0,
  },
  reducers: {
    viewDark: (state) => {
      if (state.darkView) {
        state.darkView -= 1;
      } else {
        state.darkView += 1;
      }
    },
    checkNoMessage: (state, action) => {
      state.noOfMsg = action.payload;
    },
    urlRoute: (state, action) => {
      state.url = action.payload;
    },
    updateData: (state, action) => {
      state.dataList = action.payload;
    },
    updateThreadId: (state, action) => {
      state.threadId = action.payload;
    },
    updateThreadData: (state, action) => {
      state.threadData = action.payload;
    },
    replybuttonUpdate: (state, action) => {
      state.replyButton = action.payload;
    },
    deleteButton: (state, action) => {
      state.deletion = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  deleteButton,
  replybuttonUpdate,
  viewDark,
  checkNoMessage,
  urlRoute,
  updateData,
  updateThreadData,
  updateThreadId,
} = featureUse.actions;

export default featureUse.reducer;
