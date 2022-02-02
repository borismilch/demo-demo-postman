import { configureStore } from "@reduxjs/toolkit";

import tabReducer from "./reducers/tabReducer";
import windowReducer from "./reducers/windowReducer";
import responseReducer from './reducers/responseReducer'

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
    windows: windowReducer,
    response: responseReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch