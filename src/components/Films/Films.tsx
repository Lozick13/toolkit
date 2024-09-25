import { FC } from 'react';
import Film from '../../models/Film';
import FilmPreview from '../FilmPreview/FilmPreview';
import classes from './films.module.css';

const Films: FC<{ films: Film[] }> = ({ films }) => {
	return (
		<>
			<section className={classes['films']}>
				<div className={classes['films__wrapper']}>
					{films.map(film => (
						<FilmPreview key={film.imdbID} film={film} />
					))}
				</div>
			</section>
		</>
	);
};

export default Films;
