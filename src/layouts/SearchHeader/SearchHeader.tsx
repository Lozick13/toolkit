import { FC, useState } from 'react';
import BaseButton from '../../ui/buttons/BaseButton/BaseButton';
import BaseInput from '../../ui/inputs/BaseInput/BaseInput';
import HeaderBase from '../HeaderBase/HeaderBase';
import classes from './searchheader.module.css';

const SearchHeader: FC<{ search: (title: string) => void }> = ({ search }) => {
	const [data, setData] = useState<string>('');

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		search(data);
		setData('');
	};

	return (
		<>
			<HeaderBase
				title='Movie finder'
				nav={[
					{ name: 'Search', link: '/' },
					{ name: 'Favorites', link: '/favorites' },
				]}
			>
				<form onSubmit={handleSearch} className={classes['search-box']}>
					<BaseInput
						id='search-film'
						name='search-film'
						value={data}
						type='text'
						change={(e: React.ChangeEvent<HTMLInputElement>) =>
							setData(e.target.value)
						}
						required
					/>
					<BaseButton text='Find' />
				</form>
			</HeaderBase>
		</>
	);
};

export default SearchHeader;
