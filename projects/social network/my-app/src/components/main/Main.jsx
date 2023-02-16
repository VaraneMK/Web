import React from 'react';
import c from './Main.module.css';
import Header from '../header/Header';
import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs.jsx';

function Main() {
  return (
    <main className={c.main}>
      <Header />
      <Profile />
      <Dialogs />
    </main>
  );
}

export default Main;
