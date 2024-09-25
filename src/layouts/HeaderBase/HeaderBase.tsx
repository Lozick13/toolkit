import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './headerbase.module.css';

const HeaderBox: FC<{
	title: string;
	children?: ReactNode;
	nav: { name: string; link: string }[];
}> = ({ title, children, nav }) => {
	return (
		<>
			<header className={classes['header-base']}>
				{nav && (
					<nav className={classes['header-base__nav']}>
						{nav.map(({ name, link }) => (
							<NavLink
								key={name}
								className={classes['header-base__nav-item']}
								to={link}
							>
								{name}
							</NavLink>
						))}
					</nav>
				)}
				<div className={classes['header-base__content']}>
					<h1>{title}</h1>
					{children}
				</div>
			</header>
		</>
	);
};

export default HeaderBox;
