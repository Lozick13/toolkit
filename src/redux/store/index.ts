import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../slices/favoritesSlice';
import filmsReducer from '../slices/filmsSlice';

export const store = configureStore({
	reducer: {
		films: filmsReducer,
		favorites: favoritesReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
