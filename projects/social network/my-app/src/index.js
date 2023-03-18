import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store.js';
import App from './App';
import { Provider } from 'react-redux';

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
