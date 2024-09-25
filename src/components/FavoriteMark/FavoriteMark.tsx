import { FC } from 'react';
import IconButton from '../../ui/buttons/IconButton/IconButton';
import classes from './favoritemark.module.css';

const FavoriteMark: FC<{ active: boolean; click: () => void }> = ({
	active,
	click,
}) => {
	const styles = `${classes['favorite-mark']} ${
		active ? classes['favorite-mark_active'] : ''
	}`;

	return (
		<>
			<div className={styles}>
				<IconButton
					icon='star'
					click={() => {
						click();
					}}
				/>
			</div>
		</>
	);
};

export default FavoriteMark;
