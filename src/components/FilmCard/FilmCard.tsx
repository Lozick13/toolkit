import { FC } from 'react';
import Film from '../../models/Film';
import classes from './filmcard.module.css';

const FilmCard: FC<{ film: Film }> = ({ film }) => {
	return (
		<>
			<article className={classes['film-card']}>
				<img
					src={film.Poster}
					alt=''
					className={classes['film-card__poster']}
				/>
				<div className={classes['film-card__info']}>
					<span>
						<span className={classes['film-card__bold']}>Genre: </span>{film.Genre}
					</span>
					<span>
						<span className={classes['film-card__bold']}>Runtime: </span>{film.Runtime}
					</span>
					<span>
						<span className={classes['film-card__bold']}>Director: </span>{film.Director}
					</span>
					<span>
						<span className={classes['film-card__bold']}>Actors: </span>
					{film.Actors}
					</span>
					<span>
						<span className={classes['film-card__bold']}>Rating: </span>{film.imdbRating}
					</span>
				</div>
			</article>
		</>
	);
};

export default FilmCard;
