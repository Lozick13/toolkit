import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Film from '../../models/Film';

const initialState: { films: Film[] } = { films: [] };

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<Film>) => {
			state.films.push(action.payload);
		},
		deleteFavorite: (state, action: PayloadAction<string>) => {
			state.films = state.films.filter(film => film.imdbID !== action.payload);
		}
	},
});

export const { addFavorite, deleteFavorite} =
	favoritesSlice.actions;
export default favoritesSlice.reducer;
