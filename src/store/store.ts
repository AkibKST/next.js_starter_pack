import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { bookingsApi } from "./api/bookingsApi";
import { servicesApi } from "./api/servicesApi";
import { techniciansApi } from "./api/techniciansApi";
import { reviewsApi } from "./api/reviewsApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [bookingsApi.reducerPath]: bookingsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [techniciansApi.reducerPath]: techniciansApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(bookingsApi.middleware)
      .concat(servicesApi.middleware)
      .concat(techniciansApi.middleware)
      .concat(reviewsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
