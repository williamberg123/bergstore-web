import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageType } from '../components/NavBar';

export const pageSlice = createSlice({
	name: 'page',
	initialState: 'home',
	reducers: {
		changePage: (state, action: PayloadAction<PageType>) => {
			return action.payload;
		},
	},
});

export const pageReducer = pageSlice.reducer;

export const { changePage } = pageSlice.actions;
