import {configureStore} from "@reduxjs/toolkit";
import form from './slices/formSlice'
import {formApi} from "./api/formApi";

export const store = configureStore({
  reducer: {
    form,
    [formApi.reducerPath]: formApi.reducer
  },
  middleware:
    (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        formApi.middleware
      ])
})