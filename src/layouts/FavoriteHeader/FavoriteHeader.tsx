import HeaderBase from '../HeaderBase/HeaderBase';

const FavoriteHeader = () => {
	return (
		<>
			<HeaderBase
				title='Favorites'
				nav={[
					{ name: 'Search', link: '/' },
					{ name: 'Favorites', link: '/favorites' },
				]}
			></HeaderBase>
		</>
	);
};

export default FavoriteHeader;
