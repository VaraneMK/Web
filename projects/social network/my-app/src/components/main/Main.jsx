import React from 'react';
import c from './Main.module.css';
import Header from '../header/Header';
import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs.jsx';
import { Route, Routes } from 'react-router-dom';
import Chat from '../dialogs/chat/Chat';

function Main(props) {
  return (
    <main className={c.main}>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile postsData={props.appState.profilePage} dispatch={props.dispatch} />} />
        <Route path="/dialogs" element={<Dialogs dialogsData={props.appState.dialogPage} />} />
        <Route
          path="/dialogs/*"
          element={<Chat messagesData={props.appState.dialogPage} dispatch={props.dispatch} />}
        />
      </Routes>
    </main>
  );
}

export default Main;
