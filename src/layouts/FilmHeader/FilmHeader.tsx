import { FC } from 'react';
import HeaderBase from '../HeaderBase/HeaderBase';

const FilmHeader: FC<{ name: string }> = ({ name }) => {
	return (
		<>
			<HeaderBase
				title={name}
				nav={[
					{ name: 'Search', link: '/' },
					{ name: 'Favorites', link: '/favorites' },
				]}
			/>
		</>
	);
};

export default FilmHeader;
