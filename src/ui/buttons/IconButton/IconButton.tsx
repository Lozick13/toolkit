import classes from './iconbutton.module.css';

interface IProps {
	icon: string;
	click: () => void;
}

const IconButton = ({ icon, click }: IProps) => {
	return (
		<>
			<button onClick={click} className={classes['icon-button']}>
				<i className='material-icons'>{icon}</i>
			</button>
		</>
	);
};

export default IconButton;
