import Films from '../../components/Films/Films';
import { useAppSelector } from '../../hooks';
import FavoriteHeader from '../../layouts/FavoriteHeader/FavoriteHeader';
import classes from './favoritepage.module.css';

const FavoritePage = () => {
	const { films } = useAppSelector(state => state.favorites);
	return (
		<>
			<main className={classes['favorite-page']}>
				<FavoriteHeader />
				<Films films={films} />
			</main>
		</>
	);
};

export default FavoritePage;
