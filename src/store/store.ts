import { showSlice } from '@/store/slices/showSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    showList: showSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
