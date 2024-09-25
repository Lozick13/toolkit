import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FilmCard from '../../components/FilmCard/FilmCard';
import FilmHeader from '../../layouts/FilmHeader/FilmHeader';
import Film from '../../models/Film';
import classes from './filmpage.module.css';

const FilmPage = () => {
	const [film, setFilm] = useState<Film | null>(null);
	const { id } = useParams();

	const fetchFilm = async (id: string) => {
		try {
			const response = await fetch(
				`http://www.omdbapi.com/?apikey=64405bd2&i=${id}`
			);

			if (!response.ok) {
				throw new Error('Ошибка при получении данных');
			}

			const filmData = await response.json();
			const convertedFilm: Film = {
				imdbID: filmData.imdbID,
				Title: filmData.Title,
				Genre: filmData.Genre,
				Runtime: filmData.Runtime,
				Director: filmData.Director,
				Actors: filmData.Actors,
				imdbRating: filmData.imdbRating,
				Poster: filmData.Poster,
			};
			return convertedFilm;
		} catch (e) {
			console.error(e);
			return null;
		}
	};

	useEffect(() => {
		const getFilm = async () => {
			if (id) {
				const filmData = await fetchFilm(id);
				setFilm(filmData);
			}
		};

		getFilm();
	}, [id]);

	return (
		<>
			{film ? (
				<main className={classes['film-page']}>
					<FilmHeader name={film.Title} />
					<FilmCard film={film} />
				</main>
			) : (
				<div>Загрузка...</div>
			)}
		</>
	);
};

export default FilmPage;
