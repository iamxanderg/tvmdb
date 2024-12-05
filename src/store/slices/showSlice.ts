import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Show, ShowState } from '../types/show';

const initialState: ShowState = {
  shows: [],
};

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    addShow: (state, action: PayloadAction<Show>) => {
      state.shows.push(action.payload);
    },
    addShows: (state, action: PayloadAction<Show[]>) => {
      state.shows = action.payload;
    },
    removeShow: (state, action: PayloadAction<number>) => {
      state.shows = state.shows.filter((show: Show) => show.id !== action.payload);
    },
    removeAllShows: (state) => {
      state.shows = [];
    },
    updateShow: (state, action: PayloadAction<Show>) => {
      const index = state.shows.findIndex((show: Show) => show.id === action.payload.id);
      state.shows[index] = { ...state.shows[index], ...action.payload };
    },
  },
});

export const { addShow, addShows, removeShow, removeAllShows, updateShow } = showSlice.actions;
export default showSlice.reducer;
