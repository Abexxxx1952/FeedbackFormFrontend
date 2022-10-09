import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameField: "",
  emailField: "",
  messageField: "",
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    editNameField: (state, action) => {
      state.nameField = action.payload;
    },
    editEmailField: (state, action) => {
      state.emailField = action.payload;
    },
    editMessageField: (state, action) => {
      state.messageField = action.payload;
    },
  },
});

export const { editNameField, editEmailField, editMessageField } =
  formSlice.actions;

export default formSlice.reducer;
