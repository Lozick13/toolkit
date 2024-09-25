import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';
import Film from '../../models/Film';

const initialState: {
	films: Film[];
	loading: boolean;
	error: string;
} = {
	films: [],
	loading: false,
	error: '',
};

const createSliceWithThunk = buildCreateSlice({
	creators: { asyncThunk: asyncThunkCreator },
});

export const filmsSlice = createSliceWithThunk({
	name: 'films',
	initialState,
	selectors: {
		filmsState: state => state,
		filmsList: state => state.films,
	},
	reducers: create => ({
		fetchFilms: create.asyncThunk<Film[], string>(
			async (title, { rejectWithValue }) => {
				try {
					const response = await fetch(
						`http://www.omdbapi.com/?apikey=64405bd2&s=${title}`
					);

					console.log(response);

					if (!response.ok) {
						throw new Error('Error fetching data');
					}

					const films = await response.json();

					if (!films.Search) {
						throw new Error('No film data found');
					}

					const convertedFilms = films.Search.map((film: Film) => {
						return {
							imdbID: film.imdbID,
							Title: film.Title,
							Poster: film.Poster,
							Year: film.Year,
						};
					});

					return convertedFilms;
				} catch (e: unknown) {
					if (e instanceof Error) {
						return rejectWithValue(e.message);
					}
					return rejectWithValue('Unknown error');
				}
			},
			{
				pending: state => {
					state.loading = true;
					state.error = '';
				},
				fulfilled: (state, action) => {
					state.films = action.payload;
					state.error = '';
				},
				rejected: (state, action) => {
					state.error = action.payload as string;
					state.films = [];
					state.loading = false;
				},
				settled: state => {
					state.loading = false;
				},
			}
		),
		clearFilms: create.reducer(state => {
			state.films = [];
		}),
	}),
});

export const { fetchFilms, clearFilms } = filmsSlice.actions;

const filmsReducer = filmsSlice.reducer;
export default filmsReducer;
