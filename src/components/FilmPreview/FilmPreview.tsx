import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Film from '../../models/Film';
import { addFavorite, deleteFavorite } from '../../redux/slices/favoritesSlice';
import FavoriteMark from '../FavoriteMark/FavoriteMark';
import classes from './filmpreview.module.css';

const FilmPreview: FC<{ film: Film }> = ({ film }) => {
	const [favorite, setFavorite] = useState(false);
	const dispatch = useAppDispatch();
	const { films } = useAppSelector(state => state.favorites);
	const navigate = useNavigate();

	useEffect(() => {
		setFavorite(films.some((f: Film) => f.imdbID === film.imdbID));
	}, [films, film.imdbID]);

	const toggleFavorite = () => {
		if (favorite) {
			dispatch(deleteFavorite(film.imdbID));
		} else {
			dispatch(addFavorite(film));
		}
		setFavorite(prev => !prev);
	};

	return (
		<article className={classes['film-preview']}>
			<div className={classes['film-preview__header']}>
				<h3>{film.Title}</h3>
				<span>{film.Year}</span>
				<div className={classes['film-preview__favorites']}>
					<FavoriteMark click={toggleFavorite} active={favorite} />
				</div>
			</div>
			<img
				onClick={() => navigate(`/film/${film.imdbID}`)}
				src={film.Poster}
				alt={`${film.Title} poster`}
				className={classes['film-preview__poster']}
			/>
		</article>
	);
};

export default FilmPreview;
