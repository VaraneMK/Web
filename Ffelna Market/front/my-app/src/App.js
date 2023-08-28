import { BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import { useDispatch } from 'react-redux';
import { getCategories } from './redux/categories/categoriesSlice';
import { getCart } from './redux/user/userSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
		dispatch(getCart());
	}, [dispatch]);

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Main />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
