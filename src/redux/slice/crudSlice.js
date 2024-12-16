import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { initialState } from "../../constant";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: initialState },
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4();
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      // const filtered = state.tasks.filter((i) => i.id !== action.payload);
      // state.tasks = filtered;
      const i = state.tasks.findIndex((i) => i.id === action.payload);
      state.tasks.splice(i, 1);
    },
    updateTask: (state, action) => {
      const i = state.tasks.findIndex((i) => i.id === action.payload);

      state.tasks.splice(i, 1, action.payload);
    },
  },
});
export default crudSlice.reducer;
export const { addTask, deleteTask, updateTask } = crudSlice.actions;
