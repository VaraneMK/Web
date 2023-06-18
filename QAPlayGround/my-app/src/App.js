import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {
	const [isAuth, setAuth] = useState(true);
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header
					isAuth={!isAuth}
					userName="f8ner"
					setAuthStatus={setAuth}
				/>
				<Main
					auth={isAuth}
					setAuthStatus={setAuth}
				/>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
