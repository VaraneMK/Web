import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
export function rerenderEntireTree() {
  root.render(
    <React.StrictMode>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
reportWebVitals();
