import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./components/admin/menu/menuSlice";
import weekReducer from "./components/admin/week/weekSlice";
import { menuApi } from "./components/admin/menu/menuApi";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    week: weekReducer,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
