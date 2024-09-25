import { FC } from 'react';
import classes from './basebutton.module.css';

const BaseButton: FC<{ text: string; click?: () => void }> = ({
	text,
	click,
}) => {
	return (
		<>
			<button onClick={click} className={classes['base-button']}>
				{text}
			</button>
		</>
	);
};

export default BaseButton;
