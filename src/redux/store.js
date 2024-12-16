import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slice/counterSlice";
import crudSlice from "./slice/crudSlice";

const store = configureStore({
  reducer: { counterSlice, crudSlice },
});
export default store;
