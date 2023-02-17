import React from 'react';
import c from './Main.module.css';
import Header from '../header/Header';
import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs.jsx';
import { Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <main className={c.main}>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs" element={<Dialogs />} />
      </Routes>
    </main>
  );
}

export default Main;
