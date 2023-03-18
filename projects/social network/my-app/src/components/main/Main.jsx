import React from 'react';
import c from './Main.module.css';
import Header from '../header/Header';
import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs.jsx';
import { NavLink, Route, Routes } from 'react-router-dom';
import ChatContainer from '../dialogs/chat/ChatContainer';
import UsersContainer from '../users/UsersContainer';

function Main(props) {
  return (
    <main className={c.main}>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs" element={<Dialogs state={props.state} />} />
        <Route path="/dialogs/*" element={<ChatContainer />} />
        <Route path="/friends" element={<NavLink to="/users">Поиск пользователей</NavLink>} />
        <Route path="/users" element={<UsersContainer />} />
      </Routes>
    </main>
  );
}

export default Main;
