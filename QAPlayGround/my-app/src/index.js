import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
export function rerenderEntireTree() {
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App state={store.getState()} />
			</Provider>
		</React.StrictMode>,
	);
}

rerenderEntireTree(store.getState());
reportWebVitals();
