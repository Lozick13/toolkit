import Films from '../../components/Films/Films';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SearchHeader from '../../layouts/SearchHeader/SearchHeader';
import { fetchFilms } from '../../redux/slices/filmsSlice';
import classes from './searchpage.module.css';

const SearchPage = () => {
	const { films, loading, error } = useAppSelector(state => state.films);
	const dispatch = useAppDispatch();

	const handleSearch = (title: string) => {
		dispatch(fetchFilms(title));
	};

	return (
		<main className={classes['search-page']}>
			<SearchHeader search={handleSearch} />
			{loading && <span>loading</span>}
			{films.length > 0 && !error ? (
				<Films films={films} />
			) : (
				!loading && (
					<span>{error ? 'Films not found: ' + error : 'Films not found'}</span>
				)
			)}
		</main>
	);
};
export default SearchPage;
