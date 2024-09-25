import { Route, Routes } from 'react-router-dom';
import './App.css';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import FilmPage from './pages/FilmPage/FilmPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' index element={<SearchPage />}></Route>
				<Route path='/favorites' element={<FavoritePage />}></Route>
				<Route path='/film/:id' element={<FilmPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
